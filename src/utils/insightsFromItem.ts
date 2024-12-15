import { FieldInsight } from "../models/fieldInsight";
import { ItemWithItemEmbed } from "../models/airfocus";

export function getInsightsFromItem(item: ItemWithItemEmbed): FieldInsight[] {
  return Object.keys(item.fields).reduce<FieldInsight[]>(
    (insights, fieldId) => {
      const field = item.fields[fieldId];

      if ((field.insights || []).length === 0) {
        return insights;
      }

      return [...insights, ...field.insights];
    },
    [],
  );
}
