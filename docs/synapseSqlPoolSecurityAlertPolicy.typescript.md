# `synapseSqlPoolSecurityAlertPolicy` Submodule <a name="`synapseSqlPoolSecurityAlertPolicy` Submodule" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSqlPoolSecurityAlertPolicy <a name="SynapseSqlPoolSecurityAlertPolicy" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy azurerm_synapse_sql_pool_security_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer"></a>

```typescript
import { synapseSqlPoolSecurityAlertPolicy } from '@cdktf/provider-azurerm'

new synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy(scope: Construct, id: string, config: SynapseSqlPoolSecurityAlertPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig">SynapseSqlPoolSecurityAlertPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig">SynapseSqlPoolSecurityAlertPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetDisabledAlerts">resetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetEmailAccountAdminsEnabled">resetEmailAccountAdminsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: SynapseSqlPoolSecurityAlertPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a>

---

##### `resetDisabledAlerts` <a name="resetDisabledAlerts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetDisabledAlerts"></a>

```typescript
public resetDisabledAlerts(): void
```

##### `resetEmailAccountAdminsEnabled` <a name="resetEmailAccountAdminsEnabled" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetEmailAccountAdminsEnabled"></a>

```typescript
public resetEmailAccountAdminsEnabled(): void
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetStorageEndpoint"></a>

```typescript
public resetStorageEndpoint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseSqlPoolSecurityAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isConstruct"></a>

```typescript
import { synapseSqlPoolSecurityAlertPolicy } from '@cdktf/provider-azurerm'

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformElement"></a>

```typescript
import { synapseSqlPoolSecurityAlertPolicy } from '@cdktf/provider-azurerm'

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformResource"></a>

```typescript
import { synapseSqlPoolSecurityAlertPolicy } from '@cdktf/provider-azurerm'

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport"></a>

```typescript
import { synapseSqlPoolSecurityAlertPolicy } from '@cdktf/provider-azurerm'

synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SynapseSqlPoolSecurityAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynapseSqlPoolSecurityAlertPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynapseSqlPoolSecurityAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseSqlPoolSecurityAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference">SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.disabledAlertsInput">disabledAlertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAccountAdminsEnabledInput">emailAccountAdminsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.policyStateInput">policyStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.sqlPoolIdInput">sqlPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageEndpointInput">storageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.disabledAlerts">disabledAlerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAccountAdminsEnabled">emailAccountAdminsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.policyState">policyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.sqlPoolId">sqlPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference">SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference</a>

---

##### `disabledAlertsInput`<sup>Optional</sup> <a name="disabledAlertsInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.disabledAlertsInput"></a>

```typescript
public readonly disabledAlertsInput: string[];
```

- *Type:* string[]

---

##### `emailAccountAdminsEnabledInput`<sup>Optional</sup> <a name="emailAccountAdminsEnabledInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAccountAdminsEnabledInput"></a>

```typescript
public readonly emailAccountAdminsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyStateInput`<sup>Optional</sup> <a name="policyStateInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.policyStateInput"></a>

```typescript
public readonly policyStateInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `sqlPoolIdInput`<sup>Optional</sup> <a name="sqlPoolIdInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.sqlPoolIdInput"></a>

```typescript
public readonly sqlPoolIdInput: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageEndpointInput"></a>

```typescript
public readonly storageEndpointInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SynapseSqlPoolSecurityAlertPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a>

---

##### `disabledAlerts`<sup>Required</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.disabledAlerts"></a>

```typescript
public readonly disabledAlerts: string[];
```

- *Type:* string[]

---

##### `emailAccountAdminsEnabled`<sup>Required</sup> <a name="emailAccountAdminsEnabled" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAccountAdminsEnabled"></a>

```typescript
public readonly emailAccountAdminsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyState`<sup>Required</sup> <a name="policyState" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.policyState"></a>

```typescript
public readonly policyState: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `sqlPoolId`<sup>Required</sup> <a name="sqlPoolId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.sqlPoolId"></a>

```typescript
public readonly sqlPoolId: string;
```

- *Type:* string

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSqlPoolSecurityAlertPolicyConfig <a name="SynapseSqlPoolSecurityAlertPolicyConfig" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.Initializer"></a>

```typescript
import { synapseSqlPoolSecurityAlertPolicy } from '@cdktf/provider-azurerm'

const synapseSqlPoolSecurityAlertPolicyConfig: synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.policyState">policyState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#policy_state SynapseSqlPoolSecurityAlertPolicy#policy_state}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.sqlPoolId">sqlPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#sql_pool_id SynapseSqlPoolSecurityAlertPolicy#sql_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.disabledAlerts">disabledAlerts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#disabled_alerts SynapseSqlPoolSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled">emailAccountAdminsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#email_account_admins_enabled SynapseSqlPoolSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#email_addresses SynapseSqlPoolSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#id SynapseSqlPoolSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#retention_days SynapseSqlPoolSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#storage_account_access_key SynapseSqlPoolSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#storage_endpoint SynapseSqlPoolSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyState`<sup>Required</sup> <a name="policyState" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.policyState"></a>

```typescript
public readonly policyState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#policy_state SynapseSqlPoolSecurityAlertPolicy#policy_state}.

---

##### `sqlPoolId`<sup>Required</sup> <a name="sqlPoolId" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.sqlPoolId"></a>

```typescript
public readonly sqlPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#sql_pool_id SynapseSqlPoolSecurityAlertPolicy#sql_pool_id}.

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.disabledAlerts"></a>

```typescript
public readonly disabledAlerts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#disabled_alerts SynapseSqlPoolSecurityAlertPolicy#disabled_alerts}.

---

##### `emailAccountAdminsEnabled`<sup>Optional</sup> <a name="emailAccountAdminsEnabled" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled"></a>

```typescript
public readonly emailAccountAdminsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#email_account_admins_enabled SynapseSqlPoolSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#email_addresses SynapseSqlPoolSecurityAlertPolicy#email_addresses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#id SynapseSqlPoolSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#retention_days SynapseSqlPoolSecurityAlertPolicy#retention_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#storage_account_access_key SynapseSqlPoolSecurityAlertPolicy#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#storage_endpoint SynapseSqlPoolSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseSqlPoolSecurityAlertPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#timeouts SynapseSqlPoolSecurityAlertPolicy#timeouts}

---

### SynapseSqlPoolSecurityAlertPolicyTimeouts <a name="SynapseSqlPoolSecurityAlertPolicyTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.Initializer"></a>

```typescript
import { synapseSqlPoolSecurityAlertPolicy } from '@cdktf/provider-azurerm'

const synapseSqlPoolSecurityAlertPolicyTimeouts: synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#create SynapseSqlPoolSecurityAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#delete SynapseSqlPoolSecurityAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#read SynapseSqlPoolSecurityAlertPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#update SynapseSqlPoolSecurityAlertPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#create SynapseSqlPoolSecurityAlertPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#delete SynapseSqlPoolSecurityAlertPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#read SynapseSqlPoolSecurityAlertPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/synapse_sql_pool_security_alert_policy#update SynapseSqlPoolSecurityAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference <a name="SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { synapseSqlPoolSecurityAlertPolicy } from '@cdktf/provider-azurerm'

new synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynapseSqlPoolSecurityAlertPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.synapseSqlPoolSecurityAlertPolicy.SynapseSqlPoolSecurityAlertPolicyTimeouts">SynapseSqlPoolSecurityAlertPolicyTimeouts</a>

---



