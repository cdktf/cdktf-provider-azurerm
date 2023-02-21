# `activeDirectoryDomainServiceReplicaSet` Submodule <a name="`activeDirectoryDomainServiceReplicaSet` Submodule" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainServiceReplicaSet <a name="ActiveDirectoryDomainServiceReplicaSet" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set azurerm_active_directory_domain_service_replica_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.Initializer"></a>

```typescript
import { activeDirectoryDomainServiceReplicaSet } from '@cdktf/provider-azurerm'

new activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet(scope: Construct, id: string, config: ActiveDirectoryDomainServiceReplicaSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig">ActiveDirectoryDomainServiceReplicaSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig">ActiveDirectoryDomainServiceReplicaSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.putTimeouts"></a>

```typescript
public putTimeouts(value: ActiveDirectoryDomainServiceReplicaSetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts">ActiveDirectoryDomainServiceReplicaSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isConstruct"></a>

```typescript
import { activeDirectoryDomainServiceReplicaSet } from '@cdktf/provider-azurerm'

activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isTerraformElement"></a>

```typescript
import { activeDirectoryDomainServiceReplicaSet } from '@cdktf/provider-azurerm'

activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isTerraformResource"></a>

```typescript
import { activeDirectoryDomainServiceReplicaSet } from '@cdktf/provider-azurerm'

activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.domainControllerIpAddresses">domainControllerIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.externalAccessIpAddress">externalAccessIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.serviceStatus">serviceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference">ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.domainServiceIdInput">domainServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts">ActiveDirectoryDomainServiceReplicaSetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.domainServiceId">domainServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainControllerIpAddresses`<sup>Required</sup> <a name="domainControllerIpAddresses" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.domainControllerIpAddresses"></a>

```typescript
public readonly domainControllerIpAddresses: string[];
```

- *Type:* string[]

---

##### `externalAccessIpAddress`<sup>Required</sup> <a name="externalAccessIpAddress" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.externalAccessIpAddress"></a>

```typescript
public readonly externalAccessIpAddress: string;
```

- *Type:* string

---

##### `serviceStatus`<sup>Required</sup> <a name="serviceStatus" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.serviceStatus"></a>

```typescript
public readonly serviceStatus: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.timeouts"></a>

```typescript
public readonly timeouts: ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference">ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference</a>

---

##### `domainServiceIdInput`<sup>Optional</sup> <a name="domainServiceIdInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.domainServiceIdInput"></a>

```typescript
public readonly domainServiceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ActiveDirectoryDomainServiceReplicaSetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts">ActiveDirectoryDomainServiceReplicaSetTimeouts</a> | cdktf.IResolvable

---

##### `domainServiceId`<sup>Required</sup> <a name="domainServiceId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.domainServiceId"></a>

```typescript
public readonly domainServiceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainServiceReplicaSetConfig <a name="ActiveDirectoryDomainServiceReplicaSetConfig" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.Initializer"></a>

```typescript
import { activeDirectoryDomainServiceReplicaSet } from '@cdktf/provider-azurerm'

const activeDirectoryDomainServiceReplicaSetConfig: activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.domainServiceId">domainServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#domain_service_id ActiveDirectoryDomainServiceReplicaSet#domain_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#location ActiveDirectoryDomainServiceReplicaSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#subnet_id ActiveDirectoryDomainServiceReplicaSet#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#id ActiveDirectoryDomainServiceReplicaSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts">ActiveDirectoryDomainServiceReplicaSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainServiceId`<sup>Required</sup> <a name="domainServiceId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.domainServiceId"></a>

```typescript
public readonly domainServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#domain_service_id ActiveDirectoryDomainServiceReplicaSet#domain_service_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#location ActiveDirectoryDomainServiceReplicaSet#location}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#subnet_id ActiveDirectoryDomainServiceReplicaSet#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#id ActiveDirectoryDomainServiceReplicaSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ActiveDirectoryDomainServiceReplicaSetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts">ActiveDirectoryDomainServiceReplicaSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#timeouts ActiveDirectoryDomainServiceReplicaSet#timeouts}

---

### ActiveDirectoryDomainServiceReplicaSetTimeouts <a name="ActiveDirectoryDomainServiceReplicaSetTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts.Initializer"></a>

```typescript
import { activeDirectoryDomainServiceReplicaSet } from '@cdktf/provider-azurerm'

const activeDirectoryDomainServiceReplicaSetTimeouts: activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#create ActiveDirectoryDomainServiceReplicaSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#delete ActiveDirectoryDomainServiceReplicaSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#read ActiveDirectoryDomainServiceReplicaSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#update ActiveDirectoryDomainServiceReplicaSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#create ActiveDirectoryDomainServiceReplicaSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#delete ActiveDirectoryDomainServiceReplicaSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#read ActiveDirectoryDomainServiceReplicaSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set#update ActiveDirectoryDomainServiceReplicaSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference <a name="ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.Initializer"></a>

```typescript
import { activeDirectoryDomainServiceReplicaSet } from '@cdktf/provider-azurerm'

new activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts">ActiveDirectoryDomainServiceReplicaSetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActiveDirectoryDomainServiceReplicaSetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceReplicaSet.ActiveDirectoryDomainServiceReplicaSetTimeouts">ActiveDirectoryDomainServiceReplicaSetTimeouts</a> | cdktf.IResolvable

---



