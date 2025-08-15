# `sentinelAlertRuleAnomalyBuiltIn` Submodule <a name="`sentinelAlertRuleAnomalyBuiltIn` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleAnomalyBuiltIn <a name="SentinelAlertRuleAnomalyBuiltIn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in azurerm_sentinel_alert_rule_anomaly_built_in}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn(scope: Construct, id: string, config: SentinelAlertRuleAnomalyBuiltInConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig">SentinelAlertRuleAnomalyBuiltInConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig">SentinelAlertRuleAnomalyBuiltInConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelAlertRuleAnomalyBuiltInTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts">SentinelAlertRuleAnomalyBuiltInTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelAlertRuleAnomalyBuiltIn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isConstruct"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformElement"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformResource"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SentinelAlertRuleAnomalyBuiltIn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelAlertRuleAnomalyBuiltIn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelAlertRuleAnomalyBuiltIn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleAnomalyBuiltIn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.anomalySettingsVersion">anomalySettingsVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.anomalyVersion">anomalyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.multiSelectObservation">multiSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList">SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.prioritizedExcludeObservation">prioritizedExcludeObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList">SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.requiredDataConnector">requiredDataConnector</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList">SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.settingsDefinitionId">settingsDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.singleSelectObservation">singleSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList">SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.tactics">tactics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.techniques">techniques</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.thresholdObservation">thresholdObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList">SentinelAlertRuleAnomalyBuiltInThresholdObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference">SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts">SentinelAlertRuleAnomalyBuiltInTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `anomalySettingsVersion`<sup>Required</sup> <a name="anomalySettingsVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.anomalySettingsVersion"></a>

```typescript
public readonly anomalySettingsVersion: number;
```

- *Type:* number

---

##### `anomalyVersion`<sup>Required</sup> <a name="anomalyVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.anomalyVersion"></a>

```typescript
public readonly anomalyVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `multiSelectObservation`<sup>Required</sup> <a name="multiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.multiSelectObservation"></a>

```typescript
public readonly multiSelectObservation: SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList">SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList</a>

---

##### `prioritizedExcludeObservation`<sup>Required</sup> <a name="prioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.prioritizedExcludeObservation"></a>

```typescript
public readonly prioritizedExcludeObservation: SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList">SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList</a>

---

##### `requiredDataConnector`<sup>Required</sup> <a name="requiredDataConnector" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.requiredDataConnector"></a>

```typescript
public readonly requiredDataConnector: SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList">SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList</a>

---

##### `settingsDefinitionId`<sup>Required</sup> <a name="settingsDefinitionId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.settingsDefinitionId"></a>

```typescript
public readonly settingsDefinitionId: string;
```

- *Type:* string

---

##### `singleSelectObservation`<sup>Required</sup> <a name="singleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.singleSelectObservation"></a>

```typescript
public readonly singleSelectObservation: SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList">SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList</a>

---

##### `tactics`<sup>Required</sup> <a name="tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.tactics"></a>

```typescript
public readonly tactics: string[];
```

- *Type:* string[]

---

##### `techniques`<sup>Required</sup> <a name="techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.techniques"></a>

```typescript
public readonly techniques: string[];
```

- *Type:* string[]

---

##### `thresholdObservation`<sup>Required</sup> <a name="thresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.thresholdObservation"></a>

```typescript
public readonly thresholdObservation: SentinelAlertRuleAnomalyBuiltInThresholdObservationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList">SentinelAlertRuleAnomalyBuiltInThresholdObservationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference">SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelAlertRuleAnomalyBuiltInTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts">SentinelAlertRuleAnomalyBuiltInTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleAnomalyBuiltInConfig <a name="SentinelAlertRuleAnomalyBuiltInConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyBuiltInConfig: sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#enabled SentinelAlertRuleAnomalyBuiltIn#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#log_analytics_workspace_id SentinelAlertRuleAnomalyBuiltIn#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#mode SentinelAlertRuleAnomalyBuiltIn#mode}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#display_name SentinelAlertRuleAnomalyBuiltIn#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#id SentinelAlertRuleAnomalyBuiltIn#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#name SentinelAlertRuleAnomalyBuiltIn#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts">SentinelAlertRuleAnomalyBuiltInTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#enabled SentinelAlertRuleAnomalyBuiltIn#enabled}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#log_analytics_workspace_id SentinelAlertRuleAnomalyBuiltIn#log_analytics_workspace_id}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#mode SentinelAlertRuleAnomalyBuiltIn#mode}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#display_name SentinelAlertRuleAnomalyBuiltIn#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#id SentinelAlertRuleAnomalyBuiltIn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#name SentinelAlertRuleAnomalyBuiltIn#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelAlertRuleAnomalyBuiltInTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts">SentinelAlertRuleAnomalyBuiltInTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#timeouts SentinelAlertRuleAnomalyBuiltIn#timeouts}

---

### SentinelAlertRuleAnomalyBuiltInMultiSelectObservation <a name="SentinelAlertRuleAnomalyBuiltInMultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyBuiltInMultiSelectObservation: sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation = { ... }
```


### SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation <a name="SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation: sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation = { ... }
```


### SentinelAlertRuleAnomalyBuiltInRequiredDataConnector <a name="SentinelAlertRuleAnomalyBuiltInRequiredDataConnector" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyBuiltInRequiredDataConnector: sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector = { ... }
```


### SentinelAlertRuleAnomalyBuiltInSingleSelectObservation <a name="SentinelAlertRuleAnomalyBuiltInSingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyBuiltInSingleSelectObservation: sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation = { ... }
```


### SentinelAlertRuleAnomalyBuiltInThresholdObservation <a name="SentinelAlertRuleAnomalyBuiltInThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservation.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyBuiltInThresholdObservation: sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservation = { ... }
```


### SentinelAlertRuleAnomalyBuiltInTimeouts <a name="SentinelAlertRuleAnomalyBuiltInTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

const sentinelAlertRuleAnomalyBuiltInTimeouts: sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#create SentinelAlertRuleAnomalyBuiltIn#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#delete SentinelAlertRuleAnomalyBuiltIn#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#read SentinelAlertRuleAnomalyBuiltIn#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#update SentinelAlertRuleAnomalyBuiltIn#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#create SentinelAlertRuleAnomalyBuiltIn#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#delete SentinelAlertRuleAnomalyBuiltIn#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#read SentinelAlertRuleAnomalyBuiltIn#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/sentinel_alert_rule_anomaly_built_in#update SentinelAlertRuleAnomalyBuiltIn#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList <a name="SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference <a name="SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.supportedValues">supportedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation">SentinelAlertRuleAnomalyBuiltInMultiSelectObservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `supportedValues`<sup>Required</sup> <a name="supportedValues" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.supportedValues"></a>

```typescript
public readonly supportedValues: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelAlertRuleAnomalyBuiltInMultiSelectObservation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation">SentinelAlertRuleAnomalyBuiltInMultiSelectObservation</a>

---


### SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList <a name="SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference <a name="SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.exclude">exclude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.prioritize">prioritize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation">SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prioritize`<sup>Required</sup> <a name="prioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.prioritize"></a>

```typescript
public readonly prioritize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation">SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation</a>

---


### SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList <a name="SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference <a name="SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.dataTypes">dataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector">SentinelAlertRuleAnomalyBuiltInRequiredDataConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `dataTypes`<sup>Required</sup> <a name="dataTypes" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.dataTypes"></a>

```typescript
public readonly dataTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelAlertRuleAnomalyBuiltInRequiredDataConnector;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector">SentinelAlertRuleAnomalyBuiltInRequiredDataConnector</a>

---


### SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList <a name="SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference <a name="SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.supportedValues">supportedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation">SentinelAlertRuleAnomalyBuiltInSingleSelectObservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `supportedValues`<sup>Required</sup> <a name="supportedValues" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.supportedValues"></a>

```typescript
public readonly supportedValues: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelAlertRuleAnomalyBuiltInSingleSelectObservation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation">SentinelAlertRuleAnomalyBuiltInSingleSelectObservation</a>

---


### SentinelAlertRuleAnomalyBuiltInThresholdObservationList <a name="SentinelAlertRuleAnomalyBuiltInThresholdObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference <a name="SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.max">max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.min">min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservation">SentinelAlertRuleAnomalyBuiltInThresholdObservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelAlertRuleAnomalyBuiltInThresholdObservation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservation">SentinelAlertRuleAnomalyBuiltInThresholdObservation</a>

---


### SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference <a name="SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleAnomalyBuiltIn } from '@cdktf/provider-azurerm'

new sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts">SentinelAlertRuleAnomalyBuiltInTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleAnomalyBuiltInTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts">SentinelAlertRuleAnomalyBuiltInTimeouts</a>

---



