# `iotTimeSeriesInsightsReferenceDataSet` Submodule <a name="`iotTimeSeriesInsightsReferenceDataSet` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsReferenceDataSet <a name="IotTimeSeriesInsightsReferenceDataSet" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set azurerm_iot_time_series_insights_reference_data_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

new iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet(scope: Construct, id: string, config: IotTimeSeriesInsightsReferenceDataSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig">IotTimeSeriesInsightsReferenceDataSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig">IotTimeSeriesInsightsReferenceDataSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putKeyProperty">putKeyProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetDataStringComparisonBehavior">resetDataStringComparisonBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyProperty` <a name="putKeyProperty" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putKeyProperty"></a>

```typescript
public putKeyProperty(value: IResolvable | IotTimeSeriesInsightsReferenceDataSetKeyProperty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putKeyProperty.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putTimeouts"></a>

```typescript
public putTimeouts(value: IotTimeSeriesInsightsReferenceDataSetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a>

---

##### `resetDataStringComparisonBehavior` <a name="resetDataStringComparisonBehavior" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetDataStringComparisonBehavior"></a>

```typescript
public resetDataStringComparisonBehavior(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotTimeSeriesInsightsReferenceDataSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isConstruct"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformElement"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformResource"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IotTimeSeriesInsightsReferenceDataSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotTimeSeriesInsightsReferenceDataSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotTimeSeriesInsightsReferenceDataSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotTimeSeriesInsightsReferenceDataSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.keyProperty">keyProperty</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList">IotTimeSeriesInsightsReferenceDataSetKeyPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference">IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dataStringComparisonBehaviorInput">dataStringComparisonBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.keyPropertyInput">keyPropertyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeSeriesInsightsEnvironmentIdInput">timeSeriesInsightsEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dataStringComparisonBehavior">dataStringComparisonBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeSeriesInsightsEnvironmentId">timeSeriesInsightsEnvironmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyProperty`<sup>Required</sup> <a name="keyProperty" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.keyProperty"></a>

```typescript
public readonly keyProperty: IotTimeSeriesInsightsReferenceDataSetKeyPropertyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList">IotTimeSeriesInsightsReferenceDataSetKeyPropertyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeouts"></a>

```typescript
public readonly timeouts: IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference">IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference</a>

---

##### `dataStringComparisonBehaviorInput`<sup>Optional</sup> <a name="dataStringComparisonBehaviorInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dataStringComparisonBehaviorInput"></a>

```typescript
public readonly dataStringComparisonBehaviorInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyPropertyInput`<sup>Optional</sup> <a name="keyPropertyInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.keyPropertyInput"></a>

```typescript
public readonly keyPropertyInput: IResolvable | IotTimeSeriesInsightsReferenceDataSetKeyProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IotTimeSeriesInsightsReferenceDataSetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a>

---

##### `timeSeriesInsightsEnvironmentIdInput`<sup>Optional</sup> <a name="timeSeriesInsightsEnvironmentIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeSeriesInsightsEnvironmentIdInput"></a>

```typescript
public readonly timeSeriesInsightsEnvironmentIdInput: string;
```

- *Type:* string

---

##### `dataStringComparisonBehavior`<sup>Required</sup> <a name="dataStringComparisonBehavior" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dataStringComparisonBehavior"></a>

```typescript
public readonly dataStringComparisonBehavior: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeSeriesInsightsEnvironmentId`<sup>Required</sup> <a name="timeSeriesInsightsEnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeSeriesInsightsEnvironmentId"></a>

```typescript
public readonly timeSeriesInsightsEnvironmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsReferenceDataSetConfig <a name="IotTimeSeriesInsightsReferenceDataSetConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

const iotTimeSeriesInsightsReferenceDataSetConfig: iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.keyProperty">keyProperty</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>[]</code> | key_property block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#location IotTimeSeriesInsightsReferenceDataSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.timeSeriesInsightsEnvironmentId">timeSeriesInsightsEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#time_series_insights_environment_id IotTimeSeriesInsightsReferenceDataSet#time_series_insights_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.dataStringComparisonBehavior">dataStringComparisonBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#data_string_comparison_behavior IotTimeSeriesInsightsReferenceDataSet#data_string_comparison_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#id IotTimeSeriesInsightsReferenceDataSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#tags IotTimeSeriesInsightsReferenceDataSet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyProperty`<sup>Required</sup> <a name="keyProperty" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.keyProperty"></a>

```typescript
public readonly keyProperty: IResolvable | IotTimeSeriesInsightsReferenceDataSetKeyProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>[]

key_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#key_property IotTimeSeriesInsightsReferenceDataSet#key_property}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#location IotTimeSeriesInsightsReferenceDataSet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}.

---

##### `timeSeriesInsightsEnvironmentId`<sup>Required</sup> <a name="timeSeriesInsightsEnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.timeSeriesInsightsEnvironmentId"></a>

```typescript
public readonly timeSeriesInsightsEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#time_series_insights_environment_id IotTimeSeriesInsightsReferenceDataSet#time_series_insights_environment_id}.

---

##### `dataStringComparisonBehavior`<sup>Optional</sup> <a name="dataStringComparisonBehavior" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.dataStringComparisonBehavior"></a>

```typescript
public readonly dataStringComparisonBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#data_string_comparison_behavior IotTimeSeriesInsightsReferenceDataSet#data_string_comparison_behavior}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#id IotTimeSeriesInsightsReferenceDataSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#tags IotTimeSeriesInsightsReferenceDataSet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IotTimeSeriesInsightsReferenceDataSetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#timeouts IotTimeSeriesInsightsReferenceDataSet#timeouts}

---

### IotTimeSeriesInsightsReferenceDataSetKeyProperty <a name="IotTimeSeriesInsightsReferenceDataSetKeyProperty" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

const iotTimeSeriesInsightsReferenceDataSetKeyProperty: iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#type IotTimeSeriesInsightsReferenceDataSet#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#type IotTimeSeriesInsightsReferenceDataSet#type}.

---

### IotTimeSeriesInsightsReferenceDataSetTimeouts <a name="IotTimeSeriesInsightsReferenceDataSetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

const iotTimeSeriesInsightsReferenceDataSetTimeouts: iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#create IotTimeSeriesInsightsReferenceDataSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#delete IotTimeSeriesInsightsReferenceDataSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#read IotTimeSeriesInsightsReferenceDataSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#update IotTimeSeriesInsightsReferenceDataSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#create IotTimeSeriesInsightsReferenceDataSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#delete IotTimeSeriesInsightsReferenceDataSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#read IotTimeSeriesInsightsReferenceDataSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/iot_time_series_insights_reference_data_set#update IotTimeSeriesInsightsReferenceDataSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsReferenceDataSetKeyPropertyList <a name="IotTimeSeriesInsightsReferenceDataSetKeyPropertyList" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

new iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.get"></a>

```typescript
public get(index: number): IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTimeSeriesInsightsReferenceDataSetKeyProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>[]

---


### IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference <a name="IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

new iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTimeSeriesInsightsReferenceDataSetKeyProperty;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>

---


### IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference <a name="IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsReferenceDataSet } from '@cdktf/provider-azurerm'

new iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTimeSeriesInsightsReferenceDataSetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a>

---



