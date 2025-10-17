# `storageAccountQueueProperties` Submodule <a name="`storageAccountQueueProperties` Submodule" id="@cdktf/provider-azurerm.storageAccountQueueProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountQueuePropertiesA <a name="StorageAccountQueuePropertiesA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

new storageAccountQueueProperties.StorageAccountQueuePropertiesA(scope: Construct, id: string, config: StorageAccountQueuePropertiesAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig">StorageAccountQueuePropertiesAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig">StorageAccountQueuePropertiesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics">putHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics">putMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetHourMetrics">resetHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetMinuteMetrics">resetMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule"></a>

```typescript
public putCorsRule(value: IResolvable | StorageAccountQueuePropertiesCorsRuleA[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>[]

---

##### `putHourMetrics` <a name="putHourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics"></a>

```typescript
public putHourMetrics(value: StorageAccountQueuePropertiesHourMetricsA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging"></a>

```typescript
public putLogging(value: StorageAccountQueuePropertiesLoggingA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---

##### `putMinuteMetrics` <a name="putMinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics"></a>

```typescript
public putMinuteMetrics(value: StorageAccountQueuePropertiesMinuteMetricsA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageAccountQueuePropertiesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetHourMetrics` <a name="resetHourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetHourMetrics"></a>

```typescript
public resetHourMetrics(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetMinuteMetrics` <a name="resetMinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetMinuteMetrics"></a>

```typescript
public resetMinuteMetrics(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccountQueuePropertiesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccountQueuePropertiesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccountQueuePropertiesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList">StorageAccountQueuePropertiesCorsRuleAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference">StorageAccountQueuePropertiesHourMetricsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference">StorageAccountQueuePropertiesLoggingAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference">StorageAccountQueuePropertiesMinuteMetricsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetricsInput">hourMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetricsInput">minuteMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRule"></a>

```typescript
public readonly corsRule: StorageAccountQueuePropertiesCorsRuleAList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList">StorageAccountQueuePropertiesCorsRuleAList</a>

---

##### `hourMetrics`<sup>Required</sup> <a name="hourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetrics"></a>

```typescript
public readonly hourMetrics: StorageAccountQueuePropertiesHourMetricsAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference">StorageAccountQueuePropertiesHourMetricsAOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.logging"></a>

```typescript
public readonly logging: StorageAccountQueuePropertiesLoggingAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference">StorageAccountQueuePropertiesLoggingAOutputReference</a>

---

##### `minuteMetrics`<sup>Required</sup> <a name="minuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetrics"></a>

```typescript
public readonly minuteMetrics: StorageAccountQueuePropertiesMinuteMetricsAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference">StorageAccountQueuePropertiesMinuteMetricsAOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountQueuePropertiesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a>

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | StorageAccountQueuePropertiesCorsRuleA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>[]

---

##### `hourMetricsInput`<sup>Optional</sup> <a name="hourMetricsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetricsInput"></a>

```typescript
public readonly hourMetricsInput: StorageAccountQueuePropertiesHourMetricsA;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.loggingInput"></a>

```typescript
public readonly loggingInput: StorageAccountQueuePropertiesLoggingA;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---

##### `minuteMetricsInput`<sup>Optional</sup> <a name="minuteMetricsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetricsInput"></a>

```typescript
public readonly minuteMetricsInput: StorageAccountQueuePropertiesMinuteMetricsA;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageAccountQueuePropertiesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountQueuePropertiesAConfig <a name="StorageAccountQueuePropertiesAConfig" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

const storageAccountQueuePropertiesAConfig: storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.corsRule">corsRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | minute_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}.

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | StorageAccountQueuePropertiesCorsRuleA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueuePropertiesA#cors_rule}

---

##### `hourMetrics`<sup>Optional</sup> <a name="hourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.hourMetrics"></a>

```typescript
public readonly hourMetrics: StorageAccountQueuePropertiesHourMetricsA;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueuePropertiesA#hour_metrics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.logging"></a>

```typescript
public readonly logging: StorageAccountQueuePropertiesLoggingA;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueuePropertiesA#logging}

---

##### `minuteMetrics`<sup>Optional</sup> <a name="minuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.minuteMetrics"></a>

```typescript
public readonly minuteMetrics: StorageAccountQueuePropertiesMinuteMetricsA;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueuePropertiesA#minute_metrics}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountQueuePropertiesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueuePropertiesA#timeouts}

---

### StorageAccountQueuePropertiesCorsRuleA <a name="StorageAccountQueuePropertiesCorsRuleA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

const storageAccountQueuePropertiesCorsRuleA: storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}.

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}.

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetricsA <a name="StorageAccountQueuePropertiesHourMetricsA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

const storageAccountQueuePropertiesHourMetricsA: storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.includeApis">includeApis</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `includeApis`<sup>Optional</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesLoggingA <a name="StorageAccountQueuePropertiesLoggingA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

const storageAccountQueuePropertiesLoggingA: storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.delete">delete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.read">read</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.write">write</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.read"></a>

```typescript
public readonly read: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.write"></a>

```typescript
public readonly write: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetricsA <a name="StorageAccountQueuePropertiesMinuteMetricsA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

const storageAccountQueuePropertiesMinuteMetricsA: storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.includeApis">includeApis</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `includeApis`<sup>Optional</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesTimeouts <a name="StorageAccountQueuePropertiesTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

const storageAccountQueuePropertiesTimeouts: storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountQueuePropertiesCorsRuleAList <a name="StorageAccountQueuePropertiesCorsRuleAList" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

new storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get"></a>

```typescript
public get(index: number): StorageAccountQueuePropertiesCorsRuleAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountQueuePropertiesCorsRuleA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>[]

---


### StorageAccountQueuePropertiesCorsRuleAOutputReference <a name="StorageAccountQueuePropertiesCorsRuleAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

new storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeadersInput"></a>

```typescript
public readonly exposedHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSecondsInput"></a>

```typescript
public readonly maxAgeInSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountQueuePropertiesCorsRuleA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>

---


### StorageAccountQueuePropertiesHourMetricsAOutputReference <a name="StorageAccountQueuePropertiesHourMetricsAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

new storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetIncludeApis">resetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeApis` <a name="resetIncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetIncludeApis"></a>

```typescript
public resetIncludeApis(): void
```

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetRetentionPolicyDays"></a>

```typescript
public resetRetentionPolicyDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApisInput">includeApisInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApis">includeApis</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeApisInput`<sup>Optional</sup> <a name="includeApisInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApisInput"></a>

```typescript
public readonly includeApisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDaysInput"></a>

```typescript
public readonly retentionPolicyDaysInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `includeApis`<sup>Required</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountQueuePropertiesHourMetricsA;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---


### StorageAccountQueuePropertiesLoggingAOutputReference <a name="StorageAccountQueuePropertiesLoggingAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

new storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resetRetentionPolicyDays"></a>

```typescript
public resetRetentionPolicyDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.deleteInput">deleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.readInput">readInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.writeInput">writeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.delete">delete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.read">read</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.write">write</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.readInput"></a>

```typescript
public readonly readInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDaysInput"></a>

```typescript
public readonly retentionPolicyDaysInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.writeInput"></a>

```typescript
public readonly writeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.read"></a>

```typescript
public readonly read: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.write"></a>

```typescript
public readonly write: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountQueuePropertiesLoggingA;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---


### StorageAccountQueuePropertiesMinuteMetricsAOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

new storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetIncludeApis">resetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeApis` <a name="resetIncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetIncludeApis"></a>

```typescript
public resetIncludeApis(): void
```

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetRetentionPolicyDays"></a>

```typescript
public resetRetentionPolicyDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApisInput">includeApisInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApis">includeApis</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeApisInput`<sup>Optional</sup> <a name="includeApisInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApisInput"></a>

```typescript
public readonly includeApisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDaysInput"></a>

```typescript
public readonly retentionPolicyDaysInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `includeApis`<sup>Required</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountQueuePropertiesMinuteMetricsA;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---


### StorageAccountQueuePropertiesTimeoutsOutputReference <a name="StorageAccountQueuePropertiesTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageAccountQueueProperties } from '@cdktf/provider-azurerm'

new storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountQueuePropertiesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---



