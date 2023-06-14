# `azurerm_sql_failover_group`

Refer to the Terraform Registory for docs: [`azurerm_sql_failover_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group).

# `sqlFailoverGroup` Submodule <a name="`sqlFailoverGroup` Submodule" id="@cdktf/provider-azurerm.sqlFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlFailoverGroup <a name="SqlFailoverGroup" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group azurerm_sql_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

new sqlFailoverGroup.SqlFailoverGroup(scope: Construct, id: string, config: SqlFailoverGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig">SqlFailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig">SqlFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putPartnerServers">putPartnerServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadonlyEndpointFailoverPolicy">putReadonlyEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadWriteEndpointFailoverPolicy">putReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetDatabases">resetDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetReadonlyEndpointFailoverPolicy">resetReadonlyEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPartnerServers` <a name="putPartnerServers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putPartnerServers"></a>

```typescript
public putPartnerServers(value: IResolvable | SqlFailoverGroupPartnerServers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putPartnerServers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>[]

---

##### `putReadonlyEndpointFailoverPolicy` <a name="putReadonlyEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadonlyEndpointFailoverPolicy"></a>

```typescript
public putReadonlyEndpointFailoverPolicy(value: SqlFailoverGroupReadonlyEndpointFailoverPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadonlyEndpointFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a>

---

##### `putReadWriteEndpointFailoverPolicy` <a name="putReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadWriteEndpointFailoverPolicy"></a>

```typescript
public putReadWriteEndpointFailoverPolicy(value: SqlFailoverGroupReadWriteEndpointFailoverPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: SqlFailoverGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a>

---

##### `resetDatabases` <a name="resetDatabases" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetDatabases"></a>

```typescript
public resetDatabases(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReadonlyEndpointFailoverPolicy` <a name="resetReadonlyEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetReadonlyEndpointFailoverPolicy"></a>

```typescript
public resetReadonlyEndpointFailoverPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isConstruct"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

sqlFailoverGroup.SqlFailoverGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformElement"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

sqlFailoverGroup.SqlFailoverGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformResource"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

sqlFailoverGroup.SqlFailoverGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.partnerServers">partnerServers</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList">SqlFailoverGroupPartnerServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readonlyEndpointFailoverPolicy">readonlyEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference">SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readWriteEndpointFailoverPolicy">readWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference">SqlFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.databasesInput">databasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.partnerServersInput">partnerServersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readonlyEndpointFailoverPolicyInput">readonlyEndpointFailoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readWriteEndpointFailoverPolicyInput">readWriteEndpointFailoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.databases">databases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `partnerServers`<sup>Required</sup> <a name="partnerServers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.partnerServers"></a>

```typescript
public readonly partnerServers: SqlFailoverGroupPartnerServersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList">SqlFailoverGroupPartnerServersList</a>

---

##### `readonlyEndpointFailoverPolicy`<sup>Required</sup> <a name="readonlyEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readonlyEndpointFailoverPolicy"></a>

```typescript
public readonly readonlyEndpointFailoverPolicy: SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference">SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference</a>

---

##### `readWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="readWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```typescript
public readonly readWriteEndpointFailoverPolicy: SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.timeouts"></a>

```typescript
public readonly timeouts: SqlFailoverGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference">SqlFailoverGroupTimeoutsOutputReference</a>

---

##### `databasesInput`<sup>Optional</sup> <a name="databasesInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.databasesInput"></a>

```typescript
public readonly databasesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partnerServersInput`<sup>Optional</sup> <a name="partnerServersInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.partnerServersInput"></a>

```typescript
public readonly partnerServersInput: IResolvable | SqlFailoverGroupPartnerServers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>[]

---

##### `readonlyEndpointFailoverPolicyInput`<sup>Optional</sup> <a name="readonlyEndpointFailoverPolicyInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readonlyEndpointFailoverPolicyInput"></a>

```typescript
public readonly readonlyEndpointFailoverPolicyInput: SqlFailoverGroupReadonlyEndpointFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a>

---

##### `readWriteEndpointFailoverPolicyInput`<sup>Optional</sup> <a name="readWriteEndpointFailoverPolicyInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readWriteEndpointFailoverPolicyInput"></a>

```typescript
public readonly readWriteEndpointFailoverPolicyInput: SqlFailoverGroupReadWriteEndpointFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SqlFailoverGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a> | cdktf.IResolvable

---

##### `databases`<sup>Required</sup> <a name="databases" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.databases"></a>

```typescript
public readonly databases: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlFailoverGroupConfig <a name="SqlFailoverGroupConfig" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

const sqlFailoverGroupConfig: sqlFailoverGroup.SqlFailoverGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#name SqlFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.partnerServers">partnerServers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>[]</code> | partner_servers block. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.readWriteEndpointFailoverPolicy">readWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#resource_group_name SqlFailoverGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#server_name SqlFailoverGroup#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.databases">databases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#databases SqlFailoverGroup#databases}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#id SqlFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.readonlyEndpointFailoverPolicy">readonlyEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a></code> | readonly_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#tags SqlFailoverGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#name SqlFailoverGroup#name}.

---

##### `partnerServers`<sup>Required</sup> <a name="partnerServers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.partnerServers"></a>

```typescript
public readonly partnerServers: IResolvable | SqlFailoverGroupPartnerServers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>[]

partner_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#partner_servers SqlFailoverGroup#partner_servers}

---

##### `readWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="readWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.readWriteEndpointFailoverPolicy"></a>

```typescript
public readonly readWriteEndpointFailoverPolicy: SqlFailoverGroupReadWriteEndpointFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#read_write_endpoint_failover_policy SqlFailoverGroup#read_write_endpoint_failover_policy}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#resource_group_name SqlFailoverGroup#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#server_name SqlFailoverGroup#server_name}.

---

##### `databases`<sup>Optional</sup> <a name="databases" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.databases"></a>

```typescript
public readonly databases: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#databases SqlFailoverGroup#databases}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#id SqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonlyEndpointFailoverPolicy`<sup>Optional</sup> <a name="readonlyEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.readonlyEndpointFailoverPolicy"></a>

```typescript
public readonly readonlyEndpointFailoverPolicy: SqlFailoverGroupReadonlyEndpointFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a>

readonly_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#readonly_endpoint_failover_policy SqlFailoverGroup#readonly_endpoint_failover_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#tags SqlFailoverGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SqlFailoverGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#timeouts SqlFailoverGroup#timeouts}

---

### SqlFailoverGroupPartnerServers <a name="SqlFailoverGroupPartnerServers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

const sqlFailoverGroupPartnerServers: sqlFailoverGroup.SqlFailoverGroupPartnerServers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#id SqlFailoverGroup#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#id SqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SqlFailoverGroupReadonlyEndpointFailoverPolicy <a name="SqlFailoverGroupReadonlyEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

const sqlFailoverGroupReadonlyEndpointFailoverPolicy: sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#mode SqlFailoverGroup#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#mode SqlFailoverGroup#mode}.

---

### SqlFailoverGroupReadWriteEndpointFailoverPolicy <a name="SqlFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

const sqlFailoverGroupReadWriteEndpointFailoverPolicy: sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#mode SqlFailoverGroup#mode}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes">graceMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#grace_minutes SqlFailoverGroup#grace_minutes}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#mode SqlFailoverGroup#mode}.

---

##### `graceMinutes`<sup>Optional</sup> <a name="graceMinutes" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes"></a>

```typescript
public readonly graceMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#grace_minutes SqlFailoverGroup#grace_minutes}.

---

### SqlFailoverGroupTimeouts <a name="SqlFailoverGroupTimeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

const sqlFailoverGroupTimeouts: sqlFailoverGroup.SqlFailoverGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#create SqlFailoverGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#delete SqlFailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#read SqlFailoverGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#update SqlFailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#create SqlFailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#delete SqlFailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#read SqlFailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sql_failover_group#update SqlFailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlFailoverGroupPartnerServersList <a name="SqlFailoverGroupPartnerServersList" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

new sqlFailoverGroup.SqlFailoverGroupPartnerServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.get"></a>

```typescript
public get(index: number): SqlFailoverGroupPartnerServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlFailoverGroupPartnerServers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>[]

---


### SqlFailoverGroupPartnerServersOutputReference <a name="SqlFailoverGroupPartnerServersOutputReference" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

new sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlFailoverGroupPartnerServers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a> | cdktf.IResolvable

---


### SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference <a name="SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

new sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlFailoverGroupReadonlyEndpointFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a>

---


### SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

new sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes">resetGraceMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGraceMinutes` <a name="resetGraceMinutes" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes"></a>

```typescript
public resetGraceMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput">graceMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">graceMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `graceMinutesInput`<sup>Optional</sup> <a name="graceMinutesInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput"></a>

```typescript
public readonly graceMinutesInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `graceMinutes`<sup>Required</sup> <a name="graceMinutes" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```typescript
public readonly graceMinutes: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlFailoverGroupReadWriteEndpointFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### SqlFailoverGroupTimeoutsOutputReference <a name="SqlFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { sqlFailoverGroup } from '@cdktf/provider-azurerm'

new sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlFailoverGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a> | cdktf.IResolvable

---



