# `sentinelAlertRuleAnomalyDuplicate` Submodule <a name="`sentinelAlertRuleAnomalyDuplicate` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleAnomalyDuplicate <a name="SentinelAlertRuleAnomalyDuplicate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate azurerm_sentinel_alert_rule_anomaly_duplicate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate(scope: Construct, id: string, config: SentinelAlertRuleAnomalyDuplicateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig">SentinelAlertRuleAnomalyDuplicateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig">SentinelAlertRuleAnomalyDuplicateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putMultiSelectObservation">putMultiSelectObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putPrioritizedExcludeObservation">putPrioritizedExcludeObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putSingleSelectObservation">putSingleSelectObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putThresholdObservation">putThresholdObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetMultiSelectObservation">resetMultiSelectObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetPrioritizedExcludeObservation">resetPrioritizedExcludeObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetSingleSelectObservation">resetSingleSelectObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetThresholdObservation">resetThresholdObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMultiSelectObservation` <a name="putMultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putMultiSelectObservation"></a>

```typescript
public putMultiSelectObservation(value: IResolvable | SentinelAlertRuleAnomalyDuplicateMultiSelectObservation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putMultiSelectObservation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>[]

---

##### `putPrioritizedExcludeObservation` <a name="putPrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putPrioritizedExcludeObservation"></a>

```typescript
public putPrioritizedExcludeObservation(value: IResolvable | SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putPrioritizedExcludeObservation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>[]

---

##### `putSingleSelectObservation` <a name="putSingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putSingleSelectObservation"></a>

```typescript
public putSingleSelectObservation(value: IResolvable | SentinelAlertRuleAnomalyDuplicateSingleSelectObservation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putSingleSelectObservation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>[]

---

##### `putThresholdObservation` <a name="putThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putThresholdObservation"></a>

```typescript
public putThresholdObservation(value: IResolvable | SentinelAlertRuleAnomalyDuplicateThresholdObservation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putThresholdObservation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelAlertRuleAnomalyDuplicateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMultiSelectObservation` <a name="resetMultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetMultiSelectObservation"></a>

```typescript
public resetMultiSelectObservation(): void
```

##### `resetPrioritizedExcludeObservation` <a name="resetPrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetPrioritizedExcludeObservation"></a>

```typescript
public resetPrioritizedExcludeObservation(): void
```

##### `resetSingleSelectObservation` <a name="resetSingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetSingleSelectObservation"></a>

```typescript
public resetSingleSelectObservation(): void
```

##### `resetThresholdObservation` <a name="resetThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetThresholdObservation"></a>

```typescript
public resetThresholdObservation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelAlertRuleAnomalyDuplicate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isConstruct"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformElement"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformResource"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SentinelAlertRuleAnomalyDuplicate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelAlertRuleAnomalyDuplicate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelAlertRuleAnomalyDuplicate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleAnomalyDuplicate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalySettingsVersion">anomalySettingsVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalyVersion">anomalyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.isDefaultSettings">isDefaultSettings</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservation">multiSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList">SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservation">prioritizedExcludeObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.requiredDataConnector">requiredDataConnector</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList">SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.settingsDefinitionId">settingsDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservation">singleSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList">SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tactics">tactics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.techniques">techniques</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservation">thresholdObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList">SentinelAlertRuleAnomalyDuplicateThresholdObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference">SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleIdInput">builtInRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservationInput">multiSelectObservationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservationInput">prioritizedExcludeObservationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservationInput">singleSelectObservationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservationInput">thresholdObservationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleId">builtInRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.mode">mode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `anomalySettingsVersion`<sup>Required</sup> <a name="anomalySettingsVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalySettingsVersion"></a>

```typescript
public readonly anomalySettingsVersion: number;
```

- *Type:* number

---

##### `anomalyVersion`<sup>Required</sup> <a name="anomalyVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalyVersion"></a>

```typescript
public readonly anomalyVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `isDefaultSettings`<sup>Required</sup> <a name="isDefaultSettings" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.isDefaultSettings"></a>

```typescript
public readonly isDefaultSettings: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `multiSelectObservation`<sup>Required</sup> <a name="multiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservation"></a>

```typescript
public readonly multiSelectObservation: SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList">SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prioritizedExcludeObservation`<sup>Required</sup> <a name="prioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservation"></a>

```typescript
public readonly prioritizedExcludeObservation: SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList</a>

---

##### `requiredDataConnector`<sup>Required</sup> <a name="requiredDataConnector" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.requiredDataConnector"></a>

```typescript
public readonly requiredDataConnector: SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList">SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList</a>

---

##### `settingsDefinitionId`<sup>Required</sup> <a name="settingsDefinitionId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.settingsDefinitionId"></a>

```typescript
public readonly settingsDefinitionId: string;
```

- *Type:* string

---

##### `singleSelectObservation`<sup>Required</sup> <a name="singleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservation"></a>

```typescript
public readonly singleSelectObservation: SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList">SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList</a>

---

##### `tactics`<sup>Required</sup> <a name="tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tactics"></a>

```typescript
public readonly tactics: string[];
```

- *Type:* string[]

---

##### `techniques`<sup>Required</sup> <a name="techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.techniques"></a>

```typescript
public readonly techniques: string[];
```

- *Type:* string[]

---

##### `thresholdObservation`<sup>Required</sup> <a name="thresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservation"></a>

```typescript
public readonly thresholdObservation: SentinelAlertRuleAnomalyDuplicateThresholdObservationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList">SentinelAlertRuleAnomalyDuplicateThresholdObservationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference">SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference</a>

---

##### `builtInRuleIdInput`<sup>Optional</sup> <a name="builtInRuleIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleIdInput"></a>

```typescript
public readonly builtInRuleIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `multiSelectObservationInput`<sup>Optional</sup> <a name="multiSelectObservationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservationInput"></a>

```typescript
public readonly multiSelectObservationInput: IResolvable | SentinelAlertRuleAnomalyDuplicateMultiSelectObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>[]

---

##### `prioritizedExcludeObservationInput`<sup>Optional</sup> <a name="prioritizedExcludeObservationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservationInput"></a>

```typescript
public readonly prioritizedExcludeObservationInput: IResolvable | SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>[]

---

##### `singleSelectObservationInput`<sup>Optional</sup> <a name="singleSelectObservationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservationInput"></a>

```typescript
public readonly singleSelectObservationInput: IResolvable | SentinelAlertRuleAnomalyDuplicateSingleSelectObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>[]

---

##### `thresholdObservationInput`<sup>Optional</sup> <a name="thresholdObservationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservationInput"></a>

```typescript
public readonly thresholdObservationInput: IResolvable | SentinelAlertRuleAnomalyDuplicateThresholdObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelAlertRuleAnomalyDuplicateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>

---

##### `builtInRuleId`<sup>Required</sup> <a name="builtInRuleId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleId"></a>

```typescript
public readonly builtInRuleId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleAnomalyDuplicateConfig <a name="SentinelAlertRuleAnomalyDuplicateConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyDuplicateConfig: sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.builtInRuleId">builtInRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#built_in_rule_id SentinelAlertRuleAnomalyDuplicate#built_in_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#display_name SentinelAlertRuleAnomalyDuplicate#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#enabled SentinelAlertRuleAnomalyDuplicate#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#log_analytics_workspace_id SentinelAlertRuleAnomalyDuplicate#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#mode SentinelAlertRuleAnomalyDuplicate#mode}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#id SentinelAlertRuleAnomalyDuplicate#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.multiSelectObservation">multiSelectObservation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>[]</code> | multi_select_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.prioritizedExcludeObservation">prioritizedExcludeObservation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>[]</code> | prioritized_exclude_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.singleSelectObservation">singleSelectObservation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>[]</code> | single_select_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.thresholdObservation">thresholdObservation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>[]</code> | threshold_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `builtInRuleId`<sup>Required</sup> <a name="builtInRuleId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.builtInRuleId"></a>

```typescript
public readonly builtInRuleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#built_in_rule_id SentinelAlertRuleAnomalyDuplicate#built_in_rule_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#display_name SentinelAlertRuleAnomalyDuplicate#display_name}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#enabled SentinelAlertRuleAnomalyDuplicate#enabled}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#log_analytics_workspace_id SentinelAlertRuleAnomalyDuplicate#log_analytics_workspace_id}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#mode SentinelAlertRuleAnomalyDuplicate#mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#id SentinelAlertRuleAnomalyDuplicate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiSelectObservation`<sup>Optional</sup> <a name="multiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.multiSelectObservation"></a>

```typescript
public readonly multiSelectObservation: IResolvable | SentinelAlertRuleAnomalyDuplicateMultiSelectObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>[]

multi_select_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#multi_select_observation SentinelAlertRuleAnomalyDuplicate#multi_select_observation}

---

##### `prioritizedExcludeObservation`<sup>Optional</sup> <a name="prioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.prioritizedExcludeObservation"></a>

```typescript
public readonly prioritizedExcludeObservation: IResolvable | SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>[]

prioritized_exclude_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#prioritized_exclude_observation SentinelAlertRuleAnomalyDuplicate#prioritized_exclude_observation}

---

##### `singleSelectObservation`<sup>Optional</sup> <a name="singleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.singleSelectObservation"></a>

```typescript
public readonly singleSelectObservation: IResolvable | SentinelAlertRuleAnomalyDuplicateSingleSelectObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>[]

single_select_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#single_select_observation SentinelAlertRuleAnomalyDuplicate#single_select_observation}

---

##### `thresholdObservation`<sup>Optional</sup> <a name="thresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.thresholdObservation"></a>

```typescript
public readonly thresholdObservation: IResolvable | SentinelAlertRuleAnomalyDuplicateThresholdObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>[]

threshold_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#threshold_observation SentinelAlertRuleAnomalyDuplicate#threshold_observation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelAlertRuleAnomalyDuplicateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#timeouts SentinelAlertRuleAnomalyDuplicate#timeouts}

---

### SentinelAlertRuleAnomalyDuplicateMultiSelectObservation <a name="SentinelAlertRuleAnomalyDuplicateMultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyDuplicateMultiSelectObservation: sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#values SentinelAlertRuleAnomalyDuplicate#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#values SentinelAlertRuleAnomalyDuplicate#values}.

---

### SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation <a name="SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation: sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.exclude">exclude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#exclude SentinelAlertRuleAnomalyDuplicate#exclude}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.prioritize">prioritize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#prioritize SentinelAlertRuleAnomalyDuplicate#prioritize}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.exclude"></a>

```typescript
public readonly exclude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#exclude SentinelAlertRuleAnomalyDuplicate#exclude}.

---

##### `prioritize`<sup>Optional</sup> <a name="prioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.prioritize"></a>

```typescript
public readonly prioritize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#prioritize SentinelAlertRuleAnomalyDuplicate#prioritize}.

---

### SentinelAlertRuleAnomalyDuplicateRequiredDataConnector <a name="SentinelAlertRuleAnomalyDuplicateRequiredDataConnector" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyDuplicateRequiredDataConnector: sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector = { ... }
```


### SentinelAlertRuleAnomalyDuplicateSingleSelectObservation <a name="SentinelAlertRuleAnomalyDuplicateSingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyDuplicateSingleSelectObservation: sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}.

---

### SentinelAlertRuleAnomalyDuplicateThresholdObservation <a name="SentinelAlertRuleAnomalyDuplicateThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyDuplicateThresholdObservation: sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}.

---

### SentinelAlertRuleAnomalyDuplicateTimeouts <a name="SentinelAlertRuleAnomalyDuplicateTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyDuplicateTimeouts: sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#create SentinelAlertRuleAnomalyDuplicate#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#delete SentinelAlertRuleAnomalyDuplicate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#read SentinelAlertRuleAnomalyDuplicate#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#update SentinelAlertRuleAnomalyDuplicate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#create SentinelAlertRuleAnomalyDuplicate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#delete SentinelAlertRuleAnomalyDuplicate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#read SentinelAlertRuleAnomalyDuplicate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#update SentinelAlertRuleAnomalyDuplicate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList <a name="SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleAnomalyDuplicateMultiSelectObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>[]

---


### SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.supportedValues">supportedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `supportedValues`<sup>Required</sup> <a name="supportedValues" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.supportedValues"></a>

```typescript
public readonly supportedValues: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleAnomalyDuplicateMultiSelectObservation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>

---


### SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList <a name="SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>[]

---


### SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetPrioritize">resetPrioritize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetPrioritize` <a name="resetPrioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetPrioritize"></a>

```typescript
public resetPrioritize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.excludeInput">excludeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritizeInput">prioritizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.exclude">exclude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritize">prioritize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `prioritizeInput`<sup>Optional</sup> <a name="prioritizeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritizeInput"></a>

```typescript
public readonly prioritizeInput: string;
```

- *Type:* string

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prioritize`<sup>Required</sup> <a name="prioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritize"></a>

```typescript
public readonly prioritize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>

---


### SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList <a name="SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference <a name="SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.dataTypes">dataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector">SentinelAlertRuleAnomalyDuplicateRequiredDataConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `dataTypes`<sup>Required</sup> <a name="dataTypes" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.dataTypes"></a>

```typescript
public readonly dataTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelAlertRuleAnomalyDuplicateRequiredDataConnector;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector">SentinelAlertRuleAnomalyDuplicateRequiredDataConnector</a>

---


### SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList <a name="SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleAnomalyDuplicateSingleSelectObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>[]

---


### SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.supportedValues">supportedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `supportedValues`<sup>Required</sup> <a name="supportedValues" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.supportedValues"></a>

```typescript
public readonly supportedValues: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleAnomalyDuplicateSingleSelectObservation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>

---


### SentinelAlertRuleAnomalyDuplicateThresholdObservationList <a name="SentinelAlertRuleAnomalyDuplicateThresholdObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleAnomalyDuplicateThresholdObservation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>[]

---


### SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.max">max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.min">min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleAnomalyDuplicateThresholdObservation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>

---


### SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference <a name="SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyDuplicate } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleAnomalyDuplicateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>

---



