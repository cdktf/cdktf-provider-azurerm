# `mssqlServerExtendedAuditingPolicy` Submodule <a name="`mssqlServerExtendedAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerExtendedAuditingPolicy <a name="MssqlServerExtendedAuditingPolicy" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy azurerm_mssql_server_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer"></a>

```typescript
import { mssqlServerExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

new mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy(scope: Construct, id: string, config: MssqlServerExtendedAuditingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig">MssqlServerExtendedAuditingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig">MssqlServerExtendedAuditingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetAuditActionsAndGroups">resetAuditActionsAndGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetLogMonitoringEnabled">resetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetPredicateExpression">resetPredicateExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">resetStorageAccountAccessKeyIsSecondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountSubscriptionId">resetStorageAccountSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlServerExtendedAuditingPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>

---

##### `resetAuditActionsAndGroups` <a name="resetAuditActionsAndGroups" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetAuditActionsAndGroups"></a>

```typescript
public resetAuditActionsAndGroups(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogMonitoringEnabled` <a name="resetLogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```typescript
public resetLogMonitoringEnabled(): void
```

##### `resetPredicateExpression` <a name="resetPredicateExpression" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetPredicateExpression"></a>

```typescript
public resetPredicateExpression(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageAccountAccessKeyIsSecondary` <a name="resetStorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```typescript
public resetStorageAccountAccessKeyIsSecondary(): void
```

##### `resetStorageAccountSubscriptionId` <a name="resetStorageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountSubscriptionId"></a>

```typescript
public resetStorageAccountSubscriptionId(): void
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageEndpoint"></a>

```typescript
public resetStorageEndpoint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlServerExtendedAuditingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isConstruct"></a>

```typescript
import { mssqlServerExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformElement"></a>

```typescript
import { mssqlServerExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformResource"></a>

```typescript
import { mssqlServerExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport"></a>

```typescript
import { mssqlServerExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MssqlServerExtendedAuditingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlServerExtendedAuditingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlServerExtendedAuditingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlServerExtendedAuditingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference">MssqlServerExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.auditActionsAndGroupsInput">auditActionsAndGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabledInput">logMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.predicateExpressionInput">predicateExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">storageAccountAccessKeyIsSecondaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionIdInput">storageAccountSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpointInput">storageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.auditActionsAndGroups">auditActionsAndGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.predicateExpression">predicateExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionId">storageAccountSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlServerExtendedAuditingPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference">MssqlServerExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `auditActionsAndGroupsInput`<sup>Optional</sup> <a name="auditActionsAndGroupsInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.auditActionsAndGroupsInput"></a>

```typescript
public readonly auditActionsAndGroupsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logMonitoringEnabledInput`<sup>Optional</sup> <a name="logMonitoringEnabledInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```typescript
public readonly logMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `predicateExpressionInput`<sup>Optional</sup> <a name="predicateExpressionInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.predicateExpressionInput"></a>

```typescript
public readonly predicateExpressionInput: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyIsSecondaryInput`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondaryInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountSubscriptionIdInput`<sup>Optional</sup> <a name="storageAccountSubscriptionIdInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionIdInput"></a>

```typescript
public readonly storageAccountSubscriptionIdInput: string;
```

- *Type:* string

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpointInput"></a>

```typescript
public readonly storageEndpointInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlServerExtendedAuditingPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>

---

##### `auditActionsAndGroups`<sup>Required</sup> <a name="auditActionsAndGroups" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.auditActionsAndGroups"></a>

```typescript
public readonly auditActionsAndGroups: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logMonitoringEnabled`<sup>Required</sup> <a name="logMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```typescript
public readonly logMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `predicateExpression`<sup>Required</sup> <a name="predicateExpression" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.predicateExpression"></a>

```typescript
public readonly predicateExpression: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyIsSecondary`<sup>Required</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountSubscriptionId`<sup>Required</sup> <a name="storageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionId"></a>

```typescript
public readonly storageAccountSubscriptionId: string;
```

- *Type:* string

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerExtendedAuditingPolicyConfig <a name="MssqlServerExtendedAuditingPolicyConfig" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.Initializer"></a>

```typescript
import { mssqlServerExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

const mssqlServerExtendedAuditingPolicyConfig: mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.serverId">serverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#server_id MssqlServerExtendedAuditingPolicy#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.auditActionsAndGroups">auditActionsAndGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#audit_actions_and_groups MssqlServerExtendedAuditingPolicy#audit_actions_and_groups}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#enabled MssqlServerExtendedAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#id MssqlServerExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#log_monitoring_enabled MssqlServerExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.predicateExpression">predicateExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#predicate_expression MssqlServerExtendedAuditingPolicy#predicate_expression}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#retention_in_days MssqlServerExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key MssqlServerExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key_is_secondary MssqlServerExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountSubscriptionId">storageAccountSubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_subscription_id MssqlServerExtendedAuditingPolicy#storage_account_subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#storage_endpoint MssqlServerExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#server_id MssqlServerExtendedAuditingPolicy#server_id}.

---

##### `auditActionsAndGroups`<sup>Optional</sup> <a name="auditActionsAndGroups" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.auditActionsAndGroups"></a>

```typescript
public readonly auditActionsAndGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#audit_actions_and_groups MssqlServerExtendedAuditingPolicy#audit_actions_and_groups}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#enabled MssqlServerExtendedAuditingPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#id MssqlServerExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logMonitoringEnabled`<sup>Optional</sup> <a name="logMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```typescript
public readonly logMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#log_monitoring_enabled MssqlServerExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `predicateExpression`<sup>Optional</sup> <a name="predicateExpression" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.predicateExpression"></a>

```typescript
public readonly predicateExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#predicate_expression MssqlServerExtendedAuditingPolicy#predicate_expression}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#retention_in_days MssqlServerExtendedAuditingPolicy#retention_in_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key MssqlServerExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key_is_secondary MssqlServerExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storageAccountSubscriptionId`<sup>Optional</sup> <a name="storageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountSubscriptionId"></a>

```typescript
public readonly storageAccountSubscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#storage_account_subscription_id MssqlServerExtendedAuditingPolicy#storage_account_subscription_id}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#storage_endpoint MssqlServerExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlServerExtendedAuditingPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#timeouts MssqlServerExtendedAuditingPolicy#timeouts}

---

### MssqlServerExtendedAuditingPolicyTimeouts <a name="MssqlServerExtendedAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.Initializer"></a>

```typescript
import { mssqlServerExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

const mssqlServerExtendedAuditingPolicyTimeouts: mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#create MssqlServerExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#delete MssqlServerExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#read MssqlServerExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#update MssqlServerExtendedAuditingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#create MssqlServerExtendedAuditingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#delete MssqlServerExtendedAuditingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#read MssqlServerExtendedAuditingPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_server_extended_auditing_policy#update MssqlServerExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerExtendedAuditingPolicyTimeoutsOutputReference <a name="MssqlServerExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlServerExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

new mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlServerExtendedAuditingPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>

---



