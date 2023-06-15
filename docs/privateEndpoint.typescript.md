# `azurerm_private_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_private_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint).

# `privateEndpoint` Submodule <a name="`privateEndpoint` Submodule" id="@cdktf/provider-azurerm.privateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateEndpoint <a name="PrivateEndpoint" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint azurerm_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpoint(scope: Construct, id: string, config: PrivateEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig">PrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig">PrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putIpConfiguration">putIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putPrivateDnsZoneGroup">putPrivateDnsZoneGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putPrivateServiceConnection">putPrivateServiceConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetCustomNetworkInterfaceName">resetCustomNetworkInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetPrivateDnsZoneGroup">resetPrivateDnsZoneGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIpConfiguration` <a name="putIpConfiguration" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putIpConfiguration"></a>

```typescript
public putIpConfiguration(value: IResolvable | PrivateEndpointIpConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putIpConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration">PrivateEndpointIpConfiguration</a>[]

---

##### `putPrivateDnsZoneGroup` <a name="putPrivateDnsZoneGroup" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putPrivateDnsZoneGroup"></a>

```typescript
public putPrivateDnsZoneGroup(value: PrivateEndpointPrivateDnsZoneGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putPrivateDnsZoneGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup">PrivateEndpointPrivateDnsZoneGroup</a>

---

##### `putPrivateServiceConnection` <a name="putPrivateServiceConnection" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putPrivateServiceConnection"></a>

```typescript
public putPrivateServiceConnection(value: PrivateEndpointPrivateServiceConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putPrivateServiceConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection">PrivateEndpointPrivateServiceConnection</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivateEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts">PrivateEndpointTimeouts</a>

---

##### `resetCustomNetworkInterfaceName` <a name="resetCustomNetworkInterfaceName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetCustomNetworkInterfaceName"></a>

```typescript
public resetCustomNetworkInterfaceName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetIpConfiguration"></a>

```typescript
public resetIpConfiguration(): void
```

##### `resetPrivateDnsZoneGroup` <a name="resetPrivateDnsZoneGroup" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetPrivateDnsZoneGroup"></a>

```typescript
public resetPrivateDnsZoneGroup(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.isConstruct"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

privateEndpoint.PrivateEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.isTerraformElement"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

privateEndpoint.PrivateEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.isTerraformResource"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

privateEndpoint.PrivateEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.customDnsConfigs">customDnsConfigs</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList">PrivateEndpointCustomDnsConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList">PrivateEndpointIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList">PrivateEndpointNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.privateDnsZoneConfigs">privateDnsZoneConfigs</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList">PrivateEndpointPrivateDnsZoneConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.privateDnsZoneGroup">privateDnsZoneGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference">PrivateEndpointPrivateDnsZoneGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.privateServiceConnection">privateServiceConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference">PrivateEndpointPrivateServiceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference">PrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.customNetworkInterfaceNameInput">customNetworkInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration">PrivateEndpointIpConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.privateDnsZoneGroupInput">privateDnsZoneGroupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup">PrivateEndpointPrivateDnsZoneGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.privateServiceConnectionInput">privateServiceConnectionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection">PrivateEndpointPrivateServiceConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts">PrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.customNetworkInterfaceName">customNetworkInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customDnsConfigs`<sup>Required</sup> <a name="customDnsConfigs" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.customDnsConfigs"></a>

```typescript
public readonly customDnsConfigs: PrivateEndpointCustomDnsConfigsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList">PrivateEndpointCustomDnsConfigsList</a>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: PrivateEndpointIpConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList">PrivateEndpointIpConfigurationList</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.networkInterface"></a>

```typescript
public readonly networkInterface: PrivateEndpointNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList">PrivateEndpointNetworkInterfaceList</a>

---

##### `privateDnsZoneConfigs`<sup>Required</sup> <a name="privateDnsZoneConfigs" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.privateDnsZoneConfigs"></a>

```typescript
public readonly privateDnsZoneConfigs: PrivateEndpointPrivateDnsZoneConfigsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList">PrivateEndpointPrivateDnsZoneConfigsList</a>

---

##### `privateDnsZoneGroup`<sup>Required</sup> <a name="privateDnsZoneGroup" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.privateDnsZoneGroup"></a>

```typescript
public readonly privateDnsZoneGroup: PrivateEndpointPrivateDnsZoneGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference">PrivateEndpointPrivateDnsZoneGroupOutputReference</a>

---

##### `privateServiceConnection`<sup>Required</sup> <a name="privateServiceConnection" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.privateServiceConnection"></a>

```typescript
public readonly privateServiceConnection: PrivateEndpointPrivateServiceConnectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference">PrivateEndpointPrivateServiceConnectionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference">PrivateEndpointTimeoutsOutputReference</a>

---

##### `customNetworkInterfaceNameInput`<sup>Optional</sup> <a name="customNetworkInterfaceNameInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.customNetworkInterfaceNameInput"></a>

```typescript
public readonly customNetworkInterfaceNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.ipConfigurationInput"></a>

```typescript
public readonly ipConfigurationInput: IResolvable | PrivateEndpointIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration">PrivateEndpointIpConfiguration</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateDnsZoneGroupInput`<sup>Optional</sup> <a name="privateDnsZoneGroupInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.privateDnsZoneGroupInput"></a>

```typescript
public readonly privateDnsZoneGroupInput: PrivateEndpointPrivateDnsZoneGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup">PrivateEndpointPrivateDnsZoneGroup</a>

---

##### `privateServiceConnectionInput`<sup>Optional</sup> <a name="privateServiceConnectionInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.privateServiceConnectionInput"></a>

```typescript
public readonly privateServiceConnectionInput: PrivateEndpointPrivateServiceConnection;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection">PrivateEndpointPrivateServiceConnection</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts">PrivateEndpointTimeouts</a>

---

##### `customNetworkInterfaceName`<sup>Required</sup> <a name="customNetworkInterfaceName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.customNetworkInterfaceName"></a>

```typescript
public readonly customNetworkInterfaceName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateEndpointConfig <a name="PrivateEndpointConfig" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

const privateEndpointConfig: privateEndpoint.PrivateEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#location PrivateEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#name PrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.privateServiceConnection">privateServiceConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection">PrivateEndpointPrivateServiceConnection</a></code> | private_service_connection block. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#resource_group_name PrivateEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#subnet_id PrivateEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.customNetworkInterfaceName">customNetworkInterfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#custom_network_interface_name PrivateEndpoint#custom_network_interface_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#id PrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.ipConfiguration">ipConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration">PrivateEndpointIpConfiguration</a>[]</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.privateDnsZoneGroup">privateDnsZoneGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup">PrivateEndpointPrivateDnsZoneGroup</a></code> | private_dns_zone_group block. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#tags PrivateEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts">PrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#location PrivateEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#name PrivateEndpoint#name}.

---

##### `privateServiceConnection`<sup>Required</sup> <a name="privateServiceConnection" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.privateServiceConnection"></a>

```typescript
public readonly privateServiceConnection: PrivateEndpointPrivateServiceConnection;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection">PrivateEndpointPrivateServiceConnection</a>

private_service_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#private_service_connection PrivateEndpoint#private_service_connection}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#resource_group_name PrivateEndpoint#resource_group_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#subnet_id PrivateEndpoint#subnet_id}.

---

##### `customNetworkInterfaceName`<sup>Optional</sup> <a name="customNetworkInterfaceName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.customNetworkInterfaceName"></a>

```typescript
public readonly customNetworkInterfaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#custom_network_interface_name PrivateEndpoint#custom_network_interface_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#id PrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: IResolvable | PrivateEndpointIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration">PrivateEndpointIpConfiguration</a>[]

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#ip_configuration PrivateEndpoint#ip_configuration}

---

##### `privateDnsZoneGroup`<sup>Optional</sup> <a name="privateDnsZoneGroup" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.privateDnsZoneGroup"></a>

```typescript
public readonly privateDnsZoneGroup: PrivateEndpointPrivateDnsZoneGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup">PrivateEndpointPrivateDnsZoneGroup</a>

private_dns_zone_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#private_dns_zone_group PrivateEndpoint#private_dns_zone_group}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#tags PrivateEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts">PrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#timeouts PrivateEndpoint#timeouts}

---

### PrivateEndpointCustomDnsConfigs <a name="PrivateEndpointCustomDnsConfigs" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigs.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

const privateEndpointCustomDnsConfigs: privateEndpoint.PrivateEndpointCustomDnsConfigs = { ... }
```


### PrivateEndpointIpConfiguration <a name="PrivateEndpointIpConfiguration" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

const privateEndpointIpConfiguration: privateEndpoint.PrivateEndpointIpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#name PrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#private_ip_address PrivateEndpoint#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration.property.memberName">memberName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#member_name PrivateEndpoint#member_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration.property.subresourceName">subresourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#subresource_name PrivateEndpoint#subresource_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#name PrivateEndpoint#name}.

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#private_ip_address PrivateEndpoint#private_ip_address}.

---

##### `memberName`<sup>Optional</sup> <a name="memberName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration.property.memberName"></a>

```typescript
public readonly memberName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#member_name PrivateEndpoint#member_name}.

---

##### `subresourceName`<sup>Optional</sup> <a name="subresourceName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration.property.subresourceName"></a>

```typescript
public readonly subresourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#subresource_name PrivateEndpoint#subresource_name}.

---

### PrivateEndpointNetworkInterface <a name="PrivateEndpointNetworkInterface" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterface.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

const privateEndpointNetworkInterface: privateEndpoint.PrivateEndpointNetworkInterface = { ... }
```


### PrivateEndpointPrivateDnsZoneConfigs <a name="PrivateEndpointPrivateDnsZoneConfigs" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigs.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

const privateEndpointPrivateDnsZoneConfigs: privateEndpoint.PrivateEndpointPrivateDnsZoneConfigs = { ... }
```


### PrivateEndpointPrivateDnsZoneConfigsRecordSets <a name="PrivateEndpointPrivateDnsZoneConfigsRecordSets" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSets.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

const privateEndpointPrivateDnsZoneConfigsRecordSets: privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSets = { ... }
```


### PrivateEndpointPrivateDnsZoneGroup <a name="PrivateEndpointPrivateDnsZoneGroup" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

const privateEndpointPrivateDnsZoneGroup: privateEndpoint.PrivateEndpointPrivateDnsZoneGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#name PrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup.property.privateDnsZoneIds">privateDnsZoneIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#private_dns_zone_ids PrivateEndpoint#private_dns_zone_ids}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#name PrivateEndpoint#name}.

---

##### `privateDnsZoneIds`<sup>Required</sup> <a name="privateDnsZoneIds" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup.property.privateDnsZoneIds"></a>

```typescript
public readonly privateDnsZoneIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#private_dns_zone_ids PrivateEndpoint#private_dns_zone_ids}.

---

### PrivateEndpointPrivateServiceConnection <a name="PrivateEndpointPrivateServiceConnection" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

const privateEndpointPrivateServiceConnection: privateEndpoint.PrivateEndpointPrivateServiceConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.isManualConnection">isManualConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#is_manual_connection PrivateEndpoint#is_manual_connection}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#name PrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.privateConnectionResourceAlias">privateConnectionResourceAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#private_connection_resource_alias PrivateEndpoint#private_connection_resource_alias}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.privateConnectionResourceId">privateConnectionResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#private_connection_resource_id PrivateEndpoint#private_connection_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.requestMessage">requestMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#request_message PrivateEndpoint#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.subresourceNames">subresourceNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#subresource_names PrivateEndpoint#subresource_names}. |

---

##### `isManualConnection`<sup>Required</sup> <a name="isManualConnection" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.isManualConnection"></a>

```typescript
public readonly isManualConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#is_manual_connection PrivateEndpoint#is_manual_connection}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#name PrivateEndpoint#name}.

---

##### `privateConnectionResourceAlias`<sup>Optional</sup> <a name="privateConnectionResourceAlias" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.privateConnectionResourceAlias"></a>

```typescript
public readonly privateConnectionResourceAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#private_connection_resource_alias PrivateEndpoint#private_connection_resource_alias}.

---

##### `privateConnectionResourceId`<sup>Optional</sup> <a name="privateConnectionResourceId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.privateConnectionResourceId"></a>

```typescript
public readonly privateConnectionResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#private_connection_resource_id PrivateEndpoint#private_connection_resource_id}.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.requestMessage"></a>

```typescript
public readonly requestMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#request_message PrivateEndpoint#request_message}.

---

##### `subresourceNames`<sup>Optional</sup> <a name="subresourceNames" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection.property.subresourceNames"></a>

```typescript
public readonly subresourceNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#subresource_names PrivateEndpoint#subresource_names}.

---

### PrivateEndpointTimeouts <a name="PrivateEndpointTimeouts" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

const privateEndpointTimeouts: privateEndpoint.PrivateEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#create PrivateEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#delete PrivateEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#read PrivateEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#update PrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#create PrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#delete PrivateEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#read PrivateEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/private_endpoint#update PrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateEndpointCustomDnsConfigsList <a name="PrivateEndpointCustomDnsConfigsList" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointCustomDnsConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.get"></a>

```typescript
public get(index: number): PrivateEndpointCustomDnsConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PrivateEndpointCustomDnsConfigsOutputReference <a name="PrivateEndpointCustomDnsConfigsOutputReference" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigs">PrivateEndpointCustomDnsConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivateEndpointCustomDnsConfigs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointCustomDnsConfigs">PrivateEndpointCustomDnsConfigs</a>

---


### PrivateEndpointIpConfigurationList <a name="PrivateEndpointIpConfigurationList" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointIpConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.get"></a>

```typescript
public get(index: number): PrivateEndpointIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration">PrivateEndpointIpConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateEndpointIpConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration">PrivateEndpointIpConfiguration</a>[]

---


### PrivateEndpointIpConfigurationOutputReference <a name="PrivateEndpointIpConfigurationOutputReference" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointIpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.resetMemberName">resetMemberName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.resetSubresourceName">resetSubresourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemberName` <a name="resetMemberName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.resetMemberName"></a>

```typescript
public resetMemberName(): void
```

##### `resetSubresourceName` <a name="resetSubresourceName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.resetSubresourceName"></a>

```typescript
public resetSubresourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.memberNameInput">memberNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.subresourceNameInput">subresourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.memberName">memberName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.subresourceName">subresourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration">PrivateEndpointIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memberNameInput`<sup>Optional</sup> <a name="memberNameInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.memberNameInput"></a>

```typescript
public readonly memberNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `subresourceNameInput`<sup>Optional</sup> <a name="subresourceNameInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.subresourceNameInput"></a>

```typescript
public readonly subresourceNameInput: string;
```

- *Type:* string

---

##### `memberName`<sup>Required</sup> <a name="memberName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.memberName"></a>

```typescript
public readonly memberName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `subresourceName`<sup>Required</sup> <a name="subresourceName" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.subresourceName"></a>

```typescript
public readonly subresourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateEndpointIpConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointIpConfiguration">PrivateEndpointIpConfiguration</a>

---


### PrivateEndpointNetworkInterfaceList <a name="PrivateEndpointNetworkInterfaceList" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.get"></a>

```typescript
public get(index: number): PrivateEndpointNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PrivateEndpointNetworkInterfaceOutputReference <a name="PrivateEndpointNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterface">PrivateEndpointNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivateEndpointNetworkInterface;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointNetworkInterface">PrivateEndpointNetworkInterface</a>

---


### PrivateEndpointPrivateDnsZoneConfigsList <a name="PrivateEndpointPrivateDnsZoneConfigsList" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.get"></a>

```typescript
public get(index: number): PrivateEndpointPrivateDnsZoneConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PrivateEndpointPrivateDnsZoneConfigsOutputReference <a name="PrivateEndpointPrivateDnsZoneConfigsOutputReference" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.privateDnsZoneId">privateDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.recordSets">recordSets</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList">PrivateEndpointPrivateDnsZoneConfigsRecordSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigs">PrivateEndpointPrivateDnsZoneConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateDnsZoneId`<sup>Required</sup> <a name="privateDnsZoneId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.privateDnsZoneId"></a>

```typescript
public readonly privateDnsZoneId: string;
```

- *Type:* string

---

##### `recordSets`<sup>Required</sup> <a name="recordSets" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.recordSets"></a>

```typescript
public readonly recordSets: PrivateEndpointPrivateDnsZoneConfigsRecordSetsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList">PrivateEndpointPrivateDnsZoneConfigsRecordSetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivateEndpointPrivateDnsZoneConfigs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigs">PrivateEndpointPrivateDnsZoneConfigs</a>

---


### PrivateEndpointPrivateDnsZoneConfigsRecordSetsList <a name="PrivateEndpointPrivateDnsZoneConfigsRecordSetsList" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.get"></a>

```typescript
public get(index: number): PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference <a name="PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSets">PrivateEndpointPrivateDnsZoneConfigsRecordSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivateEndpointPrivateDnsZoneConfigsRecordSets;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneConfigsRecordSets">PrivateEndpointPrivateDnsZoneConfigsRecordSets</a>

---


### PrivateEndpointPrivateDnsZoneGroupOutputReference <a name="PrivateEndpointPrivateDnsZoneGroupOutputReference" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.privateDnsZoneIdsInput">privateDnsZoneIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.privateDnsZoneIds">privateDnsZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup">PrivateEndpointPrivateDnsZoneGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateDnsZoneIdsInput`<sup>Optional</sup> <a name="privateDnsZoneIdsInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.privateDnsZoneIdsInput"></a>

```typescript
public readonly privateDnsZoneIdsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateDnsZoneIds`<sup>Required</sup> <a name="privateDnsZoneIds" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.privateDnsZoneIds"></a>

```typescript
public readonly privateDnsZoneIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivateEndpointPrivateDnsZoneGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateDnsZoneGroup">PrivateEndpointPrivateDnsZoneGroup</a>

---


### PrivateEndpointPrivateServiceConnectionOutputReference <a name="PrivateEndpointPrivateServiceConnectionOutputReference" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resetPrivateConnectionResourceAlias">resetPrivateConnectionResourceAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resetPrivateConnectionResourceId">resetPrivateConnectionResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resetRequestMessage">resetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resetSubresourceNames">resetSubresourceNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateConnectionResourceAlias` <a name="resetPrivateConnectionResourceAlias" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resetPrivateConnectionResourceAlias"></a>

```typescript
public resetPrivateConnectionResourceAlias(): void
```

##### `resetPrivateConnectionResourceId` <a name="resetPrivateConnectionResourceId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resetPrivateConnectionResourceId"></a>

```typescript
public resetPrivateConnectionResourceId(): void
```

##### `resetRequestMessage` <a name="resetRequestMessage" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resetRequestMessage"></a>

```typescript
public resetRequestMessage(): void
```

##### `resetSubresourceNames` <a name="resetSubresourceNames" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.resetSubresourceNames"></a>

```typescript
public resetSubresourceNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.isManualConnectionInput">isManualConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.privateConnectionResourceAliasInput">privateConnectionResourceAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.privateConnectionResourceIdInput">privateConnectionResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.requestMessageInput">requestMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.subresourceNamesInput">subresourceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.isManualConnection">isManualConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.privateConnectionResourceAlias">privateConnectionResourceAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.privateConnectionResourceId">privateConnectionResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.requestMessage">requestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.subresourceNames">subresourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection">PrivateEndpointPrivateServiceConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `isManualConnectionInput`<sup>Optional</sup> <a name="isManualConnectionInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.isManualConnectionInput"></a>

```typescript
public readonly isManualConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateConnectionResourceAliasInput`<sup>Optional</sup> <a name="privateConnectionResourceAliasInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.privateConnectionResourceAliasInput"></a>

```typescript
public readonly privateConnectionResourceAliasInput: string;
```

- *Type:* string

---

##### `privateConnectionResourceIdInput`<sup>Optional</sup> <a name="privateConnectionResourceIdInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.privateConnectionResourceIdInput"></a>

```typescript
public readonly privateConnectionResourceIdInput: string;
```

- *Type:* string

---

##### `requestMessageInput`<sup>Optional</sup> <a name="requestMessageInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.requestMessageInput"></a>

```typescript
public readonly requestMessageInput: string;
```

- *Type:* string

---

##### `subresourceNamesInput`<sup>Optional</sup> <a name="subresourceNamesInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.subresourceNamesInput"></a>

```typescript
public readonly subresourceNamesInput: string[];
```

- *Type:* string[]

---

##### `isManualConnection`<sup>Required</sup> <a name="isManualConnection" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.isManualConnection"></a>

```typescript
public readonly isManualConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateConnectionResourceAlias`<sup>Required</sup> <a name="privateConnectionResourceAlias" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.privateConnectionResourceAlias"></a>

```typescript
public readonly privateConnectionResourceAlias: string;
```

- *Type:* string

---

##### `privateConnectionResourceId`<sup>Required</sup> <a name="privateConnectionResourceId" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.privateConnectionResourceId"></a>

```typescript
public readonly privateConnectionResourceId: string;
```

- *Type:* string

---

##### `requestMessage`<sup>Required</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.requestMessage"></a>

```typescript
public readonly requestMessage: string;
```

- *Type:* string

---

##### `subresourceNames`<sup>Required</sup> <a name="subresourceNames" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.subresourceNames"></a>

```typescript
public readonly subresourceNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivateEndpointPrivateServiceConnection;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointPrivateServiceConnection">PrivateEndpointPrivateServiceConnection</a>

---


### PrivateEndpointTimeoutsOutputReference <a name="PrivateEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { privateEndpoint } from '@cdktf/provider-azurerm'

new privateEndpoint.PrivateEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts">PrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateEndpoint.PrivateEndpointTimeouts">PrivateEndpointTimeouts</a>

---



