# `azurerm_virtual_network`

Refer to the Terraform Registory for docs: [`azurerm_virtual_network`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network).

# `virtualNetwork` Submodule <a name="`virtualNetwork` Submodule" id="@cdktf/provider-azurerm.virtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetwork <a name="VirtualNetwork" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network azurerm_virtual_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.Initializer"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

new virtualNetwork.VirtualNetwork(scope: Construct, id: string, config: VirtualNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig">VirtualNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig">VirtualNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.putDdosProtectionPlan">putDdosProtectionPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetBgpCommunity">resetBgpCommunity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetDdosProtectionPlan">resetDdosProtectionPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetEdgeZone">resetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetFlowTimeoutInMinutes">resetFlowTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDdosProtectionPlan` <a name="putDdosProtectionPlan" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.putDdosProtectionPlan"></a>

```typescript
public putDdosProtectionPlan(value: VirtualNetworkDdosProtectionPlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.putDdosProtectionPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan">VirtualNetworkDdosProtectionPlan</a>

---

##### `putSubnet` <a name="putSubnet" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.putSubnet"></a>

```typescript
public putSubnet(value: IResolvable | VirtualNetworkSubnet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.putSubnet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet">VirtualNetworkSubnet</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts">VirtualNetworkTimeouts</a>

---

##### `resetBgpCommunity` <a name="resetBgpCommunity" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetBgpCommunity"></a>

```typescript
public resetBgpCommunity(): void
```

##### `resetDdosProtectionPlan` <a name="resetDdosProtectionPlan" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetDdosProtectionPlan"></a>

```typescript
public resetDdosProtectionPlan(): void
```

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetDnsServers"></a>

```typescript
public resetDnsServers(): void
```

##### `resetEdgeZone` <a name="resetEdgeZone" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetEdgeZone"></a>

```typescript
public resetEdgeZone(): void
```

##### `resetFlowTimeoutInMinutes` <a name="resetFlowTimeoutInMinutes" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetFlowTimeoutInMinutes"></a>

```typescript
public resetFlowTimeoutInMinutes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetSubnet"></a>

```typescript
public resetSubnet(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.isConstruct"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

virtualNetwork.VirtualNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.isTerraformElement"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

virtualNetwork.VirtualNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.isTerraformResource"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

virtualNetwork.VirtualNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.ddosProtectionPlan">ddosProtectionPlan</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference">VirtualNetworkDdosProtectionPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList">VirtualNetworkSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference">VirtualNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.addressSpaceInput">addressSpaceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.bgpCommunityInput">bgpCommunityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.ddosProtectionPlanInput">ddosProtectionPlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan">VirtualNetworkDdosProtectionPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.dnsServersInput">dnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.edgeZoneInput">edgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.flowTimeoutInMinutesInput">flowTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.subnetInput">subnetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet">VirtualNetworkSubnet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts">VirtualNetworkTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.addressSpace">addressSpace</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.bgpCommunity">bgpCommunity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.edgeZone">edgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.flowTimeoutInMinutes">flowTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ddosProtectionPlan`<sup>Required</sup> <a name="ddosProtectionPlan" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.ddosProtectionPlan"></a>

```typescript
public readonly ddosProtectionPlan: VirtualNetworkDdosProtectionPlanOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference">VirtualNetworkDdosProtectionPlanOutputReference</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.subnet"></a>

```typescript
public readonly subnet: VirtualNetworkSubnetList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList">VirtualNetworkSubnetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference">VirtualNetworkTimeoutsOutputReference</a>

---

##### `addressSpaceInput`<sup>Optional</sup> <a name="addressSpaceInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.addressSpaceInput"></a>

```typescript
public readonly addressSpaceInput: string[];
```

- *Type:* string[]

---

##### `bgpCommunityInput`<sup>Optional</sup> <a name="bgpCommunityInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.bgpCommunityInput"></a>

```typescript
public readonly bgpCommunityInput: string;
```

- *Type:* string

---

##### `ddosProtectionPlanInput`<sup>Optional</sup> <a name="ddosProtectionPlanInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.ddosProtectionPlanInput"></a>

```typescript
public readonly ddosProtectionPlanInput: VirtualNetworkDdosProtectionPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan">VirtualNetworkDdosProtectionPlan</a>

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.dnsServersInput"></a>

```typescript
public readonly dnsServersInput: string[];
```

- *Type:* string[]

---

##### `edgeZoneInput`<sup>Optional</sup> <a name="edgeZoneInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.edgeZoneInput"></a>

```typescript
public readonly edgeZoneInput: string;
```

- *Type:* string

---

##### `flowTimeoutInMinutesInput`<sup>Optional</sup> <a name="flowTimeoutInMinutesInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.flowTimeoutInMinutesInput"></a>

```typescript
public readonly flowTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.subnetInput"></a>

```typescript
public readonly subnetInput: IResolvable | VirtualNetworkSubnet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet">VirtualNetworkSubnet</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VirtualNetworkTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts">VirtualNetworkTimeouts</a> | cdktf.IResolvable

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.addressSpace"></a>

```typescript
public readonly addressSpace: string[];
```

- *Type:* string[]

---

##### `bgpCommunity`<sup>Required</sup> <a name="bgpCommunity" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.bgpCommunity"></a>

```typescript
public readonly bgpCommunity: string;
```

- *Type:* string

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

---

##### `edgeZone`<sup>Required</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.edgeZone"></a>

```typescript
public readonly edgeZone: string;
```

- *Type:* string

---

##### `flowTimeoutInMinutes`<sup>Required</sup> <a name="flowTimeoutInMinutes" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.flowTimeoutInMinutes"></a>

```typescript
public readonly flowTimeoutInMinutes: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkConfig <a name="VirtualNetworkConfig" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.Initializer"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

const virtualNetworkConfig: virtualNetwork.VirtualNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.addressSpace">addressSpace</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#address_space VirtualNetwork#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#location VirtualNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#name VirtualNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#resource_group_name VirtualNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.bgpCommunity">bgpCommunity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#bgp_community VirtualNetwork#bgp_community}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.ddosProtectionPlan">ddosProtectionPlan</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan">VirtualNetworkDdosProtectionPlan</a></code> | ddos_protection_plan block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#dns_servers VirtualNetwork#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.edgeZone">edgeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#edge_zone VirtualNetwork#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.flowTimeoutInMinutes">flowTimeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#flow_timeout_in_minutes VirtualNetwork#flow_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#id VirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.subnet">subnet</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet">VirtualNetworkSubnet</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#subnet VirtualNetwork#subnet}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#tags VirtualNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts">VirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.addressSpace"></a>

```typescript
public readonly addressSpace: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#address_space VirtualNetwork#address_space}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#location VirtualNetwork#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#name VirtualNetwork#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#resource_group_name VirtualNetwork#resource_group_name}.

---

##### `bgpCommunity`<sup>Optional</sup> <a name="bgpCommunity" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.bgpCommunity"></a>

```typescript
public readonly bgpCommunity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#bgp_community VirtualNetwork#bgp_community}.

---

##### `ddosProtectionPlan`<sup>Optional</sup> <a name="ddosProtectionPlan" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.ddosProtectionPlan"></a>

```typescript
public readonly ddosProtectionPlan: VirtualNetworkDdosProtectionPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan">VirtualNetworkDdosProtectionPlan</a>

ddos_protection_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#ddos_protection_plan VirtualNetwork#ddos_protection_plan}

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#dns_servers VirtualNetwork#dns_servers}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.edgeZone"></a>

```typescript
public readonly edgeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#edge_zone VirtualNetwork#edge_zone}.

---

##### `flowTimeoutInMinutes`<sup>Optional</sup> <a name="flowTimeoutInMinutes" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.flowTimeoutInMinutes"></a>

```typescript
public readonly flowTimeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#flow_timeout_in_minutes VirtualNetwork#flow_timeout_in_minutes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#id VirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.subnet"></a>

```typescript
public readonly subnet: IResolvable | VirtualNetworkSubnet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet">VirtualNetworkSubnet</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#subnet VirtualNetwork#subnet}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#tags VirtualNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualNetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts">VirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#timeouts VirtualNetwork#timeouts}

---

### VirtualNetworkDdosProtectionPlan <a name="VirtualNetworkDdosProtectionPlan" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan.Initializer"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

const virtualNetworkDdosProtectionPlan: virtualNetwork.VirtualNetworkDdosProtectionPlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#enable VirtualNetwork#enable}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#id VirtualNetwork#id}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#enable VirtualNetwork#enable}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#id VirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### VirtualNetworkSubnet <a name="VirtualNetworkSubnet" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet.Initializer"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

const virtualNetworkSubnet: virtualNetwork.VirtualNetworkSubnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#address_prefix VirtualNetwork#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#id VirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#name VirtualNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet.property.securityGroup">securityGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#security_group VirtualNetwork#security_group}. |

---

##### `addressPrefix`<sup>Optional</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#address_prefix VirtualNetwork#address_prefix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#id VirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#name VirtualNetwork#name}.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet.property.securityGroup"></a>

```typescript
public readonly securityGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#security_group VirtualNetwork#security_group}.

---

### VirtualNetworkTimeouts <a name="VirtualNetworkTimeouts" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts.Initializer"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

const virtualNetworkTimeouts: virtualNetwork.VirtualNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#create VirtualNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#delete VirtualNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#read VirtualNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#update VirtualNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#create VirtualNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#delete VirtualNetwork#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#read VirtualNetwork#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_network#update VirtualNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkDdosProtectionPlanOutputReference <a name="VirtualNetworkDdosProtectionPlanOutputReference" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.Initializer"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

new virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan">VirtualNetworkDdosProtectionPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualNetworkDdosProtectionPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkDdosProtectionPlan">VirtualNetworkDdosProtectionPlan</a>

---


### VirtualNetworkSubnetList <a name="VirtualNetworkSubnetList" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.Initializer"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

new virtualNetwork.VirtualNetworkSubnetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.get"></a>

```typescript
public get(index: number): VirtualNetworkSubnetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet">VirtualNetworkSubnet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualNetworkSubnet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet">VirtualNetworkSubnet</a>[]

---


### VirtualNetworkSubnetOutputReference <a name="VirtualNetworkSubnetOutputReference" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.Initializer"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

new virtualNetwork.VirtualNetworkSubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resetAddressPrefix">resetAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resetSecurityGroup">resetSecurityGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressPrefix` <a name="resetAddressPrefix" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resetAddressPrefix"></a>

```typescript
public resetAddressPrefix(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSecurityGroup` <a name="resetSecurityGroup" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.resetSecurityGroup"></a>

```typescript
public resetSecurityGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.addressPrefixInput">addressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.securityGroupInput">securityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.securityGroup">securityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet">VirtualNetworkSubnet</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressPrefixInput`<sup>Optional</sup> <a name="addressPrefixInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.addressPrefixInput"></a>

```typescript
public readonly addressPrefixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `securityGroupInput`<sup>Optional</sup> <a name="securityGroupInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.securityGroupInput"></a>

```typescript
public readonly securityGroupInput: string;
```

- *Type:* string

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.securityGroup"></a>

```typescript
public readonly securityGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualNetworkSubnet | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkSubnet">VirtualNetworkSubnet</a> | cdktf.IResolvable

---


### VirtualNetworkTimeoutsOutputReference <a name="VirtualNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualNetwork } from '@cdktf/provider-azurerm'

new virtualNetwork.VirtualNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts">VirtualNetworkTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualNetworkTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetwork.VirtualNetworkTimeouts">VirtualNetworkTimeouts</a> | cdktf.IResolvable

---



