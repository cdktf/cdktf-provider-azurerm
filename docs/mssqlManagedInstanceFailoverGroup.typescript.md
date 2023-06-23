# `azurerm_mssql_managed_instance_failover_group`

Refer to the Terraform Registory for docs: [`azurerm_mssql_managed_instance_failover_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group).

# `mssqlManagedInstanceFailoverGroup` Submodule <a name="`mssqlManagedInstanceFailoverGroup` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceFailoverGroup <a name="MssqlManagedInstanceFailoverGroup" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group azurerm_mssql_managed_instance_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

new mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup(scope: Construct, id: string, config: MssqlManagedInstanceFailoverGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig">MssqlManagedInstanceFailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig">MssqlManagedInstanceFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy">putReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled">resetReadonlyEndpointFailoverPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putReadWriteEndpointFailoverPolicy` <a name="putReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy"></a>

```typescript
public putReadWriteEndpointFailoverPolicy(value: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlManagedInstanceFailoverGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReadonlyEndpointFailoverPolicyEnabled` <a name="resetReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled"></a>

```typescript
public resetReadonlyEndpointFailoverPolicyEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerRegion">partnerRegion</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList">MssqlManagedInstanceFailoverGroupPartnerRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy">readWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference">MssqlManagedInstanceFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput">partnerManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput">readonlyEndpointFailoverPolicyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput">readWriteEndpointFailoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId">partnerManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled">readonlyEndpointFailoverPolicyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `partnerRegion`<sup>Required</sup> <a name="partnerRegion" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerRegion"></a>

```typescript
public readonly partnerRegion: MssqlManagedInstanceFailoverGroupPartnerRegionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList">MssqlManagedInstanceFailoverGroupPartnerRegionList</a>

---

##### `readWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="readWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```typescript
public readonly readWriteEndpointFailoverPolicy: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlManagedInstanceFailoverGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference">MssqlManagedInstanceFailoverGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partnerManagedInstanceIdInput`<sup>Optional</sup> <a name="partnerManagedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput"></a>

```typescript
public readonly partnerManagedInstanceIdInput: string;
```

- *Type:* string

---

##### `readonlyEndpointFailoverPolicyEnabledInput`<sup>Optional</sup> <a name="readonlyEndpointFailoverPolicyEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput"></a>

```typescript
public readonly readonlyEndpointFailoverPolicyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readWriteEndpointFailoverPolicyInput`<sup>Optional</sup> <a name="readWriteEndpointFailoverPolicyInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput"></a>

```typescript
public readonly readWriteEndpointFailoverPolicyInput: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlManagedInstanceFailoverGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partnerManagedInstanceId`<sup>Required</sup> <a name="partnerManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId"></a>

```typescript
public readonly partnerManagedInstanceId: string;
```

- *Type:* string

---

##### `readonlyEndpointFailoverPolicyEnabled`<sup>Required</sup> <a name="readonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled"></a>

```typescript
public readonly readonlyEndpointFailoverPolicyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceFailoverGroupConfig <a name="MssqlManagedInstanceFailoverGroupConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.Initializer"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

const mssqlManagedInstanceFailoverGroupConfig: mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId">partnerManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy">readWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled">readonlyEndpointFailoverPolicyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}.

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}.

---

##### `partnerManagedInstanceId`<sup>Required</sup> <a name="partnerManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId"></a>

```typescript
public readonly partnerManagedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}.

---

##### `readWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="readWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy"></a>

```typescript
public readonly readWriteEndpointFailoverPolicy: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#read_write_endpoint_failover_policy MssqlManagedInstanceFailoverGroup#read_write_endpoint_failover_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonlyEndpointFailoverPolicyEnabled`<sup>Optional</sup> <a name="readonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled"></a>

```typescript
public readonly readonlyEndpointFailoverPolicyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlManagedInstanceFailoverGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#timeouts MssqlManagedInstanceFailoverGroup#timeouts}

---

### MssqlManagedInstanceFailoverGroupPartnerRegion <a name="MssqlManagedInstanceFailoverGroupPartnerRegion" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion.Initializer"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

const mssqlManagedInstanceFailoverGroupPartnerRegion: mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion = { ... }
```


### MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy <a name="MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

const mssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy: mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#mode MssqlManagedInstanceFailoverGroup#mode}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes">graceMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#grace_minutes MssqlManagedInstanceFailoverGroup#grace_minutes}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#mode MssqlManagedInstanceFailoverGroup#mode}.

---

##### `graceMinutes`<sup>Optional</sup> <a name="graceMinutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes"></a>

```typescript
public readonly graceMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#grace_minutes MssqlManagedInstanceFailoverGroup#grace_minutes}.

---

### MssqlManagedInstanceFailoverGroupTimeouts <a name="MssqlManagedInstanceFailoverGroupTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.Initializer"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

const mssqlManagedInstanceFailoverGroupTimeouts: mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#create MssqlManagedInstanceFailoverGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#delete MssqlManagedInstanceFailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#read MssqlManagedInstanceFailoverGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#update MssqlManagedInstanceFailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#create MssqlManagedInstanceFailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#delete MssqlManagedInstanceFailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#read MssqlManagedInstanceFailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_failover_group#update MssqlManagedInstanceFailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceFailoverGroupPartnerRegionList <a name="MssqlManagedInstanceFailoverGroupPartnerRegionList" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

new mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get"></a>

```typescript
public get(index: number): MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference <a name="MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

new mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion">MssqlManagedInstanceFailoverGroupPartnerRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlManagedInstanceFailoverGroupPartnerRegion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion">MssqlManagedInstanceFailoverGroupPartnerRegion</a>

---


### MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

new mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes">resetGraceMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGraceMinutes` <a name="resetGraceMinutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes"></a>

```typescript
public resetGraceMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput">graceMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">graceMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `graceMinutesInput`<sup>Optional</sup> <a name="graceMinutesInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput"></a>

```typescript
public readonly graceMinutesInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `graceMinutes`<sup>Required</sup> <a name="graceMinutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```typescript
public readonly graceMinutes: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### MssqlManagedInstanceFailoverGroupTimeoutsOutputReference <a name="MssqlManagedInstanceFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlManagedInstanceFailoverGroup } from '@cdktf/provider-azurerm'

new mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlManagedInstanceFailoverGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

---



