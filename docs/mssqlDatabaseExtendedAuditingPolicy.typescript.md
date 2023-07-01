# `azurerm_mssql_database_extended_auditing_policy`

Refer to the Terraform Registory for docs: [`azurerm_mssql_database_extended_auditing_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy).

# `mssqlDatabaseExtendedAuditingPolicy` Submodule <a name="`mssqlDatabaseExtendedAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlDatabaseExtendedAuditingPolicy <a name="MssqlDatabaseExtendedAuditingPolicy" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy azurerm_mssql_database_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

new mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy(scope: Construct, id: string, config: MssqlDatabaseExtendedAuditingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig">MssqlDatabaseExtendedAuditingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig">MssqlDatabaseExtendedAuditingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetLogMonitoringEnabled">resetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">resetStorageAccountAccessKeyIsSecondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlDatabaseExtendedAuditingPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogMonitoringEnabled` <a name="resetLogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```typescript
public resetLogMonitoringEnabled(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageAccountAccessKeyIsSecondary` <a name="resetStorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```typescript
public resetStorageAccountAccessKeyIsSecondary(): void
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageEndpoint"></a>

```typescript
public resetStorageEndpoint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference">MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabledInput">logMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">storageAccountAccessKeyIsSecondaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageEndpointInput">storageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference">MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logMonitoringEnabledInput`<sup>Optional</sup> <a name="logMonitoringEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```typescript
public readonly logMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyIsSecondaryInput`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondaryInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageEndpointInput"></a>

```typescript
public readonly storageEndpointInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlDatabaseExtendedAuditingPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logMonitoringEnabled`<sup>Required</sup> <a name="logMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```typescript
public readonly logMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyIsSecondary`<sup>Required</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlDatabaseExtendedAuditingPolicyConfig <a name="MssqlDatabaseExtendedAuditingPolicyConfig" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.Initializer"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

const mssqlDatabaseExtendedAuditingPolicyConfig: mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#database_id MssqlDatabaseExtendedAuditingPolicy#database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#enabled MssqlDatabaseExtendedAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#id MssqlDatabaseExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#log_monitoring_enabled MssqlDatabaseExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#retention_in_days MssqlDatabaseExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key_is_secondary MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#storage_endpoint MssqlDatabaseExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#database_id MssqlDatabaseExtendedAuditingPolicy#database_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#enabled MssqlDatabaseExtendedAuditingPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#id MssqlDatabaseExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logMonitoringEnabled`<sup>Optional</sup> <a name="logMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```typescript
public readonly logMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#log_monitoring_enabled MssqlDatabaseExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#retention_in_days MssqlDatabaseExtendedAuditingPolicy#retention_in_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key_is_secondary MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#storage_endpoint MssqlDatabaseExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlDatabaseExtendedAuditingPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#timeouts MssqlDatabaseExtendedAuditingPolicy#timeouts}

---

### MssqlDatabaseExtendedAuditingPolicyTimeouts <a name="MssqlDatabaseExtendedAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.Initializer"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

const mssqlDatabaseExtendedAuditingPolicyTimeouts: mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#create MssqlDatabaseExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#delete MssqlDatabaseExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#read MssqlDatabaseExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#update MssqlDatabaseExtendedAuditingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#create MssqlDatabaseExtendedAuditingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#delete MssqlDatabaseExtendedAuditingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#read MssqlDatabaseExtendedAuditingPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/mssql_database_extended_auditing_policy#update MssqlDatabaseExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference <a name="MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktf/provider-azurerm'

new mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlDatabaseExtendedAuditingPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

---



