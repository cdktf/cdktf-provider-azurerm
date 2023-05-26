# `azurerm_integration_service_environment`

Refer to the Terraform Registory for docs: [`azurerm_integration_service_environment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment).

# `integrationServiceEnvironment` Submodule <a name="`integrationServiceEnvironment` Submodule" id="@cdktf/provider-azurerm.integrationServiceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationServiceEnvironment <a name="IntegrationServiceEnvironment" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment azurerm_integration_service_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer"></a>

```typescript
import { integrationServiceEnvironment } from '@cdktf/provider-azurerm'

new integrationServiceEnvironment.IntegrationServiceEnvironment(scope: Construct, id: string, config: IntegrationServiceEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig">IntegrationServiceEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig">IntegrationServiceEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetSkuName">resetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: IntegrationServiceEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts">IntegrationServiceEnvironmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSkuName` <a name="resetSkuName" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetSkuName"></a>

```typescript
public resetSkuName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isConstruct"></a>

```typescript
import { integrationServiceEnvironment } from '@cdktf/provider-azurerm'

integrationServiceEnvironment.IntegrationServiceEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformElement"></a>

```typescript
import { integrationServiceEnvironment } from '@cdktf/provider-azurerm'

integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformResource"></a>

```typescript
import { integrationServiceEnvironment } from '@cdktf/provider-azurerm'

integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connectorEndpointIpAddresses">connectorEndpointIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connectorOutboundIpAddresses">connectorOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference">IntegrationServiceEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.workflowEndpointIpAddresses">workflowEndpointIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.workflowOutboundIpAddresses">workflowOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.accessEndpointTypeInput">accessEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts">IntegrationServiceEnvironmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.virtualNetworkSubnetIdsInput">virtualNetworkSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.accessEndpointType">accessEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.virtualNetworkSubnetIds">virtualNetworkSubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectorEndpointIpAddresses`<sup>Required</sup> <a name="connectorEndpointIpAddresses" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connectorEndpointIpAddresses"></a>

```typescript
public readonly connectorEndpointIpAddresses: string[];
```

- *Type:* string[]

---

##### `connectorOutboundIpAddresses`<sup>Required</sup> <a name="connectorOutboundIpAddresses" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connectorOutboundIpAddresses"></a>

```typescript
public readonly connectorOutboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationServiceEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference">IntegrationServiceEnvironmentTimeoutsOutputReference</a>

---

##### `workflowEndpointIpAddresses`<sup>Required</sup> <a name="workflowEndpointIpAddresses" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.workflowEndpointIpAddresses"></a>

```typescript
public readonly workflowEndpointIpAddresses: string[];
```

- *Type:* string[]

---

##### `workflowOutboundIpAddresses`<sup>Required</sup> <a name="workflowOutboundIpAddresses" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.workflowOutboundIpAddresses"></a>

```typescript
public readonly workflowOutboundIpAddresses: string[];
```

- *Type:* string[]

---

##### `accessEndpointTypeInput`<sup>Optional</sup> <a name="accessEndpointTypeInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.accessEndpointTypeInput"></a>

```typescript
public readonly accessEndpointTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IntegrationServiceEnvironmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts">IntegrationServiceEnvironmentTimeouts</a> | cdktf.IResolvable

---

##### `virtualNetworkSubnetIdsInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdsInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.virtualNetworkSubnetIdsInput"></a>

```typescript
public readonly virtualNetworkSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `accessEndpointType`<sup>Required</sup> <a name="accessEndpointType" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.accessEndpointType"></a>

```typescript
public readonly accessEndpointType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualNetworkSubnetIds`<sup>Required</sup> <a name="virtualNetworkSubnetIds" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.virtualNetworkSubnetIds"></a>

```typescript
public readonly virtualNetworkSubnetIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationServiceEnvironmentConfig <a name="IntegrationServiceEnvironmentConfig" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.Initializer"></a>

```typescript
import { integrationServiceEnvironment } from '@cdktf/provider-azurerm'

const integrationServiceEnvironmentConfig: integrationServiceEnvironment.IntegrationServiceEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.accessEndpointType">accessEndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#access_endpoint_type IntegrationServiceEnvironment#access_endpoint_type}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#location IntegrationServiceEnvironment#location}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#name IntegrationServiceEnvironment#name}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#resource_group_name IntegrationServiceEnvironment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.virtualNetworkSubnetIds">virtualNetworkSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#virtual_network_subnet_ids IntegrationServiceEnvironment#virtual_network_subnet_ids}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#id IntegrationServiceEnvironment#id}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#sku_name IntegrationServiceEnvironment#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#tags IntegrationServiceEnvironment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts">IntegrationServiceEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessEndpointType`<sup>Required</sup> <a name="accessEndpointType" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.accessEndpointType"></a>

```typescript
public readonly accessEndpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#access_endpoint_type IntegrationServiceEnvironment#access_endpoint_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#location IntegrationServiceEnvironment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#name IntegrationServiceEnvironment#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#resource_group_name IntegrationServiceEnvironment#resource_group_name}.

---

##### `virtualNetworkSubnetIds`<sup>Required</sup> <a name="virtualNetworkSubnetIds" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.virtualNetworkSubnetIds"></a>

```typescript
public readonly virtualNetworkSubnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#virtual_network_subnet_ids IntegrationServiceEnvironment#virtual_network_subnet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#id IntegrationServiceEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `skuName`<sup>Optional</sup> <a name="skuName" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#sku_name IntegrationServiceEnvironment#sku_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#tags IntegrationServiceEnvironment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationServiceEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts">IntegrationServiceEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#timeouts IntegrationServiceEnvironment#timeouts}

---

### IntegrationServiceEnvironmentTimeouts <a name="IntegrationServiceEnvironmentTimeouts" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.Initializer"></a>

```typescript
import { integrationServiceEnvironment } from '@cdktf/provider-azurerm'

const integrationServiceEnvironmentTimeouts: integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#create IntegrationServiceEnvironment#create}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#delete IntegrationServiceEnvironment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#read IntegrationServiceEnvironment#read}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#update IntegrationServiceEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#create IntegrationServiceEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#delete IntegrationServiceEnvironment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#read IntegrationServiceEnvironment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/integration_service_environment#update IntegrationServiceEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationServiceEnvironmentTimeoutsOutputReference <a name="IntegrationServiceEnvironmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { integrationServiceEnvironment } from '@cdktf/provider-azurerm'

new integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts">IntegrationServiceEnvironmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationServiceEnvironmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts">IntegrationServiceEnvironmentTimeouts</a> | cdktf.IResolvable

---



