# `azurerm_point_to_site_vpn_gateway`

Refer to the Terraform Registory for docs: [`azurerm_point_to_site_vpn_gateway`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway).

# `pointToSiteVpnGateway` Submodule <a name="`pointToSiteVpnGateway` Submodule" id="@cdktf/provider-azurerm.pointToSiteVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PointToSiteVpnGateway <a name="PointToSiteVpnGateway" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway azurerm_point_to_site_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

new pointToSiteVpnGateway.PointToSiteVpnGateway(scope: Construct, id: string, config: PointToSiteVpnGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig">PointToSiteVpnGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig">PointToSiteVpnGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration">putConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetRoutingPreferenceInternetEnabled">resetRoutingPreferenceInternetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConnectionConfiguration` <a name="putConnectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration"></a>

```typescript
public putConnectionConfiguration(value: PointToSiteVpnGatewayConnectionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: PointToSiteVpnGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

---

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetDnsServers"></a>

```typescript
public resetDnsServers(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRoutingPreferenceInternetEnabled` <a name="resetRoutingPreferenceInternetEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetRoutingPreferenceInternetEnabled"></a>

```typescript
public resetRoutingPreferenceInternetEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference">PointToSiteVpnGatewayConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference">PointToSiteVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfigurationInput">connectionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServersInput">dnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabledInput">routingPreferenceInternetEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnitInput">scaleUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubIdInput">virtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationIdInput">vpnServerConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabled">routingPreferenceInternetEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnit">scaleUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationId">vpnServerConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfiguration"></a>

```typescript
public readonly connectionConfiguration: PointToSiteVpnGatewayConnectionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference">PointToSiteVpnGatewayConnectionConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeouts"></a>

```typescript
public readonly timeouts: PointToSiteVpnGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference">PointToSiteVpnGatewayTimeoutsOutputReference</a>

---

##### `connectionConfigurationInput`<sup>Optional</sup> <a name="connectionConfigurationInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfigurationInput"></a>

```typescript
public readonly connectionConfigurationInput: PointToSiteVpnGatewayConnectionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServersInput"></a>

```typescript
public readonly dnsServersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `routingPreferenceInternetEnabledInput`<sup>Optional</sup> <a name="routingPreferenceInternetEnabledInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabledInput"></a>

```typescript
public readonly routingPreferenceInternetEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scaleUnitInput`<sup>Optional</sup> <a name="scaleUnitInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnitInput"></a>

```typescript
public readonly scaleUnitInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PointToSiteVpnGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

---

##### `virtualHubIdInput`<sup>Optional</sup> <a name="virtualHubIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubIdInput"></a>

```typescript
public readonly virtualHubIdInput: string;
```

- *Type:* string

---

##### `vpnServerConfigurationIdInput`<sup>Optional</sup> <a name="vpnServerConfigurationIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationIdInput"></a>

```typescript
public readonly vpnServerConfigurationIdInput: string;
```

- *Type:* string

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `routingPreferenceInternetEnabled`<sup>Required</sup> <a name="routingPreferenceInternetEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabled"></a>

```typescript
public readonly routingPreferenceInternetEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scaleUnit`<sup>Required</sup> <a name="scaleUnit" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnit"></a>

```typescript
public readonly scaleUnit: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

---

##### `vpnServerConfigurationId`<sup>Required</sup> <a name="vpnServerConfigurationId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationId"></a>

```typescript
public readonly vpnServerConfigurationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PointToSiteVpnGatewayConfig <a name="PointToSiteVpnGatewayConfig" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

const pointToSiteVpnGatewayConfig: pointToSiteVpnGateway.PointToSiteVpnGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.scaleUnit">scaleUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.vpnServerConfigurationId">vpnServerConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.routingPreferenceInternetEnabled">routingPreferenceInternetEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connectionConfiguration"></a>

```typescript
public readonly connectionConfiguration: PointToSiteVpnGatewayConnectionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#connection_configuration PointToSiteVpnGateway#connection_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}.

---

##### `scaleUnit`<sup>Required</sup> <a name="scaleUnit" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.scaleUnit"></a>

```typescript
public readonly scaleUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}.

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}.

---

##### `vpnServerConfigurationId`<sup>Required</sup> <a name="vpnServerConfigurationId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.vpnServerConfigurationId"></a>

```typescript
public readonly vpnServerConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingPreferenceInternetEnabled`<sup>Optional</sup> <a name="routingPreferenceInternetEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.routingPreferenceInternetEnabled"></a>

```typescript
public readonly routingPreferenceInternetEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PointToSiteVpnGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#timeouts PointToSiteVpnGateway#timeouts}

---

### PointToSiteVpnGatewayConnectionConfiguration <a name="PointToSiteVpnGatewayConnectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

const pointToSiteVpnGatewayConnectionConfiguration: pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.vpnClientAddressPool">vpnClientAddressPool</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | vpn_client_address_pool block. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.internetSecurityEnabled">internetSecurityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#internet_security_enabled PointToSiteVpnGateway#internet_security_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | route block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

##### `vpnClientAddressPool`<sup>Required</sup> <a name="vpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.vpnClientAddressPool"></a>

```typescript
public readonly vpnClientAddressPool: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

vpn_client_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#vpn_client_address_pool PointToSiteVpnGateway#vpn_client_address_pool}

---

##### `internetSecurityEnabled`<sup>Optional</sup> <a name="internetSecurityEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.internetSecurityEnabled"></a>

```typescript
public readonly internetSecurityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#internet_security_enabled PointToSiteVpnGateway#internet_security_enabled}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.route"></a>

```typescript
public readonly route: PointToSiteVpnGatewayConnectionConfigurationRoute;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#route PointToSiteVpnGateway#route}

---

### PointToSiteVpnGatewayConnectionConfigurationRoute <a name="PointToSiteVpnGatewayConnectionConfigurationRoute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

const pointToSiteVpnGatewayConnectionConfigurationRoute: pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.associatedRouteTableId">associatedRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.inboundRouteMapId">inboundRouteMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#inbound_route_map_id PointToSiteVpnGateway#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.outboundRouteMapId">outboundRouteMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#outbound_route_map_id PointToSiteVpnGateway#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.propagatedRouteTable">propagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | propagated_route_table block. |

---

##### `associatedRouteTableId`<sup>Required</sup> <a name="associatedRouteTableId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.associatedRouteTableId"></a>

```typescript
public readonly associatedRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}.

---

##### `inboundRouteMapId`<sup>Optional</sup> <a name="inboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.inboundRouteMapId"></a>

```typescript
public readonly inboundRouteMapId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#inbound_route_map_id PointToSiteVpnGateway#inbound_route_map_id}.

---

##### `outboundRouteMapId`<sup>Optional</sup> <a name="outboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.outboundRouteMapId"></a>

```typescript
public readonly outboundRouteMapId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#outbound_route_map_id PointToSiteVpnGateway#outbound_route_map_id}.

---

##### `propagatedRouteTable`<sup>Optional</sup> <a name="propagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.propagatedRouteTable"></a>

```typescript
public readonly propagatedRouteTable: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#propagated_route_table PointToSiteVpnGateway#propagated_route_table}

---

### PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable <a name="PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

const pointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable: pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.ids">ids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#ids PointToSiteVpnGateway#ids}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.labels">labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#labels PointToSiteVpnGateway#labels}. |

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#ids PointToSiteVpnGateway#ids}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#labels PointToSiteVpnGateway#labels}.

---

### PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool <a name="PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

const pointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool: pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#address_prefixes PointToSiteVpnGateway#address_prefixes}. |

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#address_prefixes PointToSiteVpnGateway#address_prefixes}.

---

### PointToSiteVpnGatewayTimeouts <a name="PointToSiteVpnGatewayTimeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

const pointToSiteVpnGatewayTimeouts: pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#create PointToSiteVpnGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#delete PointToSiteVpnGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#read PointToSiteVpnGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#update PointToSiteVpnGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#create PointToSiteVpnGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#delete PointToSiteVpnGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#read PointToSiteVpnGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/point_to_site_vpn_gateway#update PointToSiteVpnGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PointToSiteVpnGatewayConnectionConfigurationOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

new pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool">putVpnClientAddressPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetInternetSecurityEnabled">resetInternetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetRoute">resetRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoute` <a name="putRoute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute"></a>

```typescript
public putRoute(value: PointToSiteVpnGatewayConnectionConfigurationRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---

##### `putVpnClientAddressPool` <a name="putVpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool"></a>

```typescript
public putVpnClientAddressPool(value: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---

##### `resetInternetSecurityEnabled` <a name="resetInternetSecurityEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetInternetSecurityEnabled"></a>

```typescript
public resetInternetSecurityEnabled(): void
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetRoute"></a>

```typescript
public resetRoute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference">PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPool">vpnClientAddressPool</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabledInput">internetSecurityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.routeInput">routeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPoolInput">vpnClientAddressPoolInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabled">internetSecurityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.route"></a>

```typescript
public readonly route: PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference">PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference</a>

---

##### `vpnClientAddressPool`<sup>Required</sup> <a name="vpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPool"></a>

```typescript
public readonly vpnClientAddressPool: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference</a>

---

##### `internetSecurityEnabledInput`<sup>Optional</sup> <a name="internetSecurityEnabledInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabledInput"></a>

```typescript
public readonly internetSecurityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.routeInput"></a>

```typescript
public readonly routeInput: PointToSiteVpnGatewayConnectionConfigurationRoute;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---

##### `vpnClientAddressPoolInput`<sup>Optional</sup> <a name="vpnClientAddressPoolInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPoolInput"></a>

```typescript
public readonly vpnClientAddressPoolInput: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---

##### `internetSecurityEnabled`<sup>Required</sup> <a name="internetSecurityEnabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabled"></a>

```typescript
public readonly internetSecurityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PointToSiteVpnGatewayConnectionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

---


### PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

new pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable">putPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetInboundRouteMapId">resetInboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetOutboundRouteMapId">resetOutboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetPropagatedRouteTable">resetPropagatedRouteTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPropagatedRouteTable` <a name="putPropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable"></a>

```typescript
public putPropagatedRouteTable(value: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---

##### `resetInboundRouteMapId` <a name="resetInboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetInboundRouteMapId"></a>

```typescript
public resetInboundRouteMapId(): void
```

##### `resetOutboundRouteMapId` <a name="resetOutboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetOutboundRouteMapId"></a>

```typescript
public resetOutboundRouteMapId(): void
```

##### `resetPropagatedRouteTable` <a name="resetPropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetPropagatedRouteTable"></a>

```typescript
public resetPropagatedRouteTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTable">propagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableIdInput">associatedRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapIdInput">inboundRouteMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapIdInput">outboundRouteMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTableInput">propagatedRouteTableInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableId">associatedRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapId">inboundRouteMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapId">outboundRouteMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propagatedRouteTable`<sup>Required</sup> <a name="propagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTable"></a>

```typescript
public readonly propagatedRouteTable: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference</a>

---

##### `associatedRouteTableIdInput`<sup>Optional</sup> <a name="associatedRouteTableIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableIdInput"></a>

```typescript
public readonly associatedRouteTableIdInput: string;
```

- *Type:* string

---

##### `inboundRouteMapIdInput`<sup>Optional</sup> <a name="inboundRouteMapIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapIdInput"></a>

```typescript
public readonly inboundRouteMapIdInput: string;
```

- *Type:* string

---

##### `outboundRouteMapIdInput`<sup>Optional</sup> <a name="outboundRouteMapIdInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapIdInput"></a>

```typescript
public readonly outboundRouteMapIdInput: string;
```

- *Type:* string

---

##### `propagatedRouteTableInput`<sup>Optional</sup> <a name="propagatedRouteTableInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTableInput"></a>

```typescript
public readonly propagatedRouteTableInput: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---

##### `associatedRouteTableId`<sup>Required</sup> <a name="associatedRouteTableId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableId"></a>

```typescript
public readonly associatedRouteTableId: string;
```

- *Type:* string

---

##### `inboundRouteMapId`<sup>Required</sup> <a name="inboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapId"></a>

```typescript
public readonly inboundRouteMapId: string;
```

- *Type:* string

---

##### `outboundRouteMapId`<sup>Required</sup> <a name="outboundRouteMapId" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapId"></a>

```typescript
public readonly outboundRouteMapId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PointToSiteVpnGatewayConnectionConfigurationRoute;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---


### PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

new pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.idsInput">idsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.idsInput"></a>

```typescript
public readonly idsInput: string[];
```

- *Type:* string[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---


### PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

new pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixesInput">addressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressPrefixesInput`<sup>Optional</sup> <a name="addressPrefixesInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixesInput"></a>

```typescript
public readonly addressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---


### PointToSiteVpnGatewayTimeoutsOutputReference <a name="PointToSiteVpnGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { pointToSiteVpnGateway } from '@cdktf/provider-azurerm'

new pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PointToSiteVpnGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

---



