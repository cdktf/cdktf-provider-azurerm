# `azurerm_traffic_manager_external_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_traffic_manager_external_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint).

# `trafficManagerExternalEndpoint` Submodule <a name="`trafficManagerExternalEndpoint` Submodule" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerExternalEndpoint <a name="TrafficManagerExternalEndpoint" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint azurerm_traffic_manager_external_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint(scope: Construct, id: string, config: TrafficManagerExternalEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig">TrafficManagerExternalEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig">TrafficManagerExternalEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putCustomHeader">putCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetCustomHeader">resetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEndpointLocation">resetEndpointLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetGeoMappings">resetGeoMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCustomHeader` <a name="putCustomHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putCustomHeader"></a>

```typescript
public putCustomHeader(value: IResolvable | TrafficManagerExternalEndpointCustomHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putCustomHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>[]

---

##### `putSubnet` <a name="putSubnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putSubnet"></a>

```typescript
public putSubnet(value: IResolvable | TrafficManagerExternalEndpointSubnet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putSubnet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: TrafficManagerExternalEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a>

---

##### `resetCustomHeader` <a name="resetCustomHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetCustomHeader"></a>

```typescript
public resetCustomHeader(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEndpointLocation` <a name="resetEndpointLocation" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEndpointLocation"></a>

```typescript
public resetEndpointLocation(): void
```

##### `resetGeoMappings` <a name="resetGeoMappings" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetGeoMappings"></a>

```typescript
public resetGeoMappings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetSubnet"></a>

```typescript
public resetSubnet(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetWeight"></a>

```typescript
public resetWeight(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isConstruct"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformElement"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformResource"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeader">customHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList">TrafficManagerExternalEndpointCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList">TrafficManagerExternalEndpointSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference">TrafficManagerExternalEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeaderInput">customHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocationInput">endpointLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappingsInput">geoMappingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnetInput">subnetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocation">endpointLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappings">geoMappings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customHeader`<sup>Required</sup> <a name="customHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeader"></a>

```typescript
public readonly customHeader: TrafficManagerExternalEndpointCustomHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList">TrafficManagerExternalEndpointCustomHeaderList</a>

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnet"></a>

```typescript
public readonly subnet: TrafficManagerExternalEndpointSubnetList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList">TrafficManagerExternalEndpointSubnetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: TrafficManagerExternalEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference">TrafficManagerExternalEndpointTimeoutsOutputReference</a>

---

##### `customHeaderInput`<sup>Optional</sup> <a name="customHeaderInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeaderInput"></a>

```typescript
public readonly customHeaderInput: IResolvable | TrafficManagerExternalEndpointCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointLocationInput`<sup>Optional</sup> <a name="endpointLocationInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocationInput"></a>

```typescript
public readonly endpointLocationInput: string;
```

- *Type:* string

---

##### `geoMappingsInput`<sup>Optional</sup> <a name="geoMappingsInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappingsInput"></a>

```typescript
public readonly geoMappingsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnetInput"></a>

```typescript
public readonly subnetInput: IResolvable | TrafficManagerExternalEndpointSubnet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>[]

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: TrafficManagerExternalEndpointTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a> | cdktf.IResolvable

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointLocation`<sup>Required</sup> <a name="endpointLocation" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocation"></a>

```typescript
public readonly endpointLocation: string;
```

- *Type:* string

---

##### `geoMappings`<sup>Required</sup> <a name="geoMappings" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappings"></a>

```typescript
public readonly geoMappings: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerExternalEndpointConfig <a name="TrafficManagerExternalEndpointConfig" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.Initializer"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

const trafficManagerExternalEndpointConfig: trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.profileId">profileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#profile_id TrafficManagerExternalEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#target TrafficManagerExternalEndpoint#target}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.customHeader">customHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>[]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#enabled TrafficManagerExternalEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.endpointLocation">endpointLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#endpoint_location TrafficManagerExternalEndpoint#endpoint_location}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.geoMappings">geoMappings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#geo_mappings TrafficManagerExternalEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#id TrafficManagerExternalEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#priority TrafficManagerExternalEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.subnet">subnet</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>[]</code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#weight TrafficManagerExternalEndpoint#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#profile_id TrafficManagerExternalEndpoint#profile_id}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#target TrafficManagerExternalEndpoint#target}.

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.customHeader"></a>

```typescript
public readonly customHeader: IResolvable | TrafficManagerExternalEndpointCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>[]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#custom_header TrafficManagerExternalEndpoint#custom_header}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#enabled TrafficManagerExternalEndpoint#enabled}.

---

##### `endpointLocation`<sup>Optional</sup> <a name="endpointLocation" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.endpointLocation"></a>

```typescript
public readonly endpointLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#endpoint_location TrafficManagerExternalEndpoint#endpoint_location}.

---

##### `geoMappings`<sup>Optional</sup> <a name="geoMappings" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.geoMappings"></a>

```typescript
public readonly geoMappings: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#geo_mappings TrafficManagerExternalEndpoint#geo_mappings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#id TrafficManagerExternalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#priority TrafficManagerExternalEndpoint#priority}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.subnet"></a>

```typescript
public readonly subnet: IResolvable | TrafficManagerExternalEndpointSubnet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>[]

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#subnet TrafficManagerExternalEndpoint#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: TrafficManagerExternalEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#timeouts TrafficManagerExternalEndpoint#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#weight TrafficManagerExternalEndpoint#weight}.

---

### TrafficManagerExternalEndpointCustomHeader <a name="TrafficManagerExternalEndpointCustomHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.Initializer"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

const trafficManagerExternalEndpointCustomHeader: trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#value TrafficManagerExternalEndpoint#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#value TrafficManagerExternalEndpoint#value}.

---

### TrafficManagerExternalEndpointSubnet <a name="TrafficManagerExternalEndpointSubnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.Initializer"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

const trafficManagerExternalEndpointSubnet: trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.first">first</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#first TrafficManagerExternalEndpoint#first}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.last">last</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#last TrafficManagerExternalEndpoint#last}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.scope">scope</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#scope TrafficManagerExternalEndpoint#scope}. |

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.first"></a>

```typescript
public readonly first: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#first TrafficManagerExternalEndpoint#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.last"></a>

```typescript
public readonly last: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#last TrafficManagerExternalEndpoint#last}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.scope"></a>

```typescript
public readonly scope: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#scope TrafficManagerExternalEndpoint#scope}.

---

### TrafficManagerExternalEndpointTimeouts <a name="TrafficManagerExternalEndpointTimeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.Initializer"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

const trafficManagerExternalEndpointTimeouts: trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#create TrafficManagerExternalEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#delete TrafficManagerExternalEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#read TrafficManagerExternalEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#update TrafficManagerExternalEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#create TrafficManagerExternalEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#delete TrafficManagerExternalEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#read TrafficManagerExternalEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/traffic_manager_external_endpoint#update TrafficManagerExternalEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerExternalEndpointCustomHeaderList <a name="TrafficManagerExternalEndpointCustomHeaderList" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.get"></a>

```typescript
public get(index: number): TrafficManagerExternalEndpointCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerExternalEndpointCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a>[]

---


### TrafficManagerExternalEndpointCustomHeaderOutputReference <a name="TrafficManagerExternalEndpointCustomHeaderOutputReference" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TrafficManagerExternalEndpointCustomHeader | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader">TrafficManagerExternalEndpointCustomHeader</a> | cdktf.IResolvable

---


### TrafficManagerExternalEndpointSubnetList <a name="TrafficManagerExternalEndpointSubnetList" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.get"></a>

```typescript
public get(index: number): TrafficManagerExternalEndpointSubnetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerExternalEndpointSubnet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a>[]

---


### TrafficManagerExternalEndpointSubnetOutputReference <a name="TrafficManagerExternalEndpointSubnetOutputReference" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLast` <a name="resetLast" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.firstInput">firstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.lastInput">lastInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scopeInput">scopeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.first">first</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.last">last</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scope">scope</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: string;
```

- *Type:* string

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.first"></a>

```typescript
public readonly first: string;
```

- *Type:* string

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.last"></a>

```typescript
public readonly last: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scope"></a>

```typescript
public readonly scope: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TrafficManagerExternalEndpointSubnet | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet">TrafficManagerExternalEndpointSubnet</a> | cdktf.IResolvable

---


### TrafficManagerExternalEndpointTimeoutsOutputReference <a name="TrafficManagerExternalEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { trafficManagerExternalEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TrafficManagerExternalEndpointTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a> | cdktf.IResolvable

---



