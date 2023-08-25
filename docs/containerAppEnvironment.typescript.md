# `azurerm_container_app_environment`

Refer to the Terraform Registory for docs: [`azurerm_container_app_environment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment).

# `containerAppEnvironment` Submodule <a name="`containerAppEnvironment` Submodule" id="@cdktf/provider-azurerm.containerAppEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironment <a name="ContainerAppEnvironment" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment azurerm_container_app_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer"></a>

```typescript
import { containerAppEnvironment } from '@cdktf/provider-azurerm'

new containerAppEnvironment.ContainerAppEnvironment(scope: Construct, id: string, config: ContainerAppEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig">ContainerAppEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig">ContainerAppEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInfrastructureSubnetId">resetInfrastructureSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInternalLoadBalancerEnabled">resetInternalLoadBalancerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetLogAnalyticsWorkspaceId">resetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerAppEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInfrastructureSubnetId` <a name="resetInfrastructureSubnetId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInfrastructureSubnetId"></a>

```typescript
public resetInfrastructureSubnetId(): void
```

##### `resetInternalLoadBalancerEnabled` <a name="resetInternalLoadBalancerEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInternalLoadBalancerEnabled"></a>

```typescript
public resetInternalLoadBalancerEnabled(): void
```

##### `resetLogAnalyticsWorkspaceId` <a name="resetLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetLogAnalyticsWorkspaceId"></a>

```typescript
public resetLogAnalyticsWorkspaceId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isConstruct"></a>

```typescript
import { containerAppEnvironment } from '@cdktf/provider-azurerm'

containerAppEnvironment.ContainerAppEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformElement"></a>

```typescript
import { containerAppEnvironment } from '@cdktf/provider-azurerm'

containerAppEnvironment.ContainerAppEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformResource"></a>

```typescript
import { containerAppEnvironment } from '@cdktf/provider-azurerm'

containerAppEnvironment.ContainerAppEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.defaultDomain">defaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dockerBridgeCidr">dockerBridgeCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedCidr">platformReservedCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedDnsIpAddress">platformReservedDnsIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.staticIpAddress">staticIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference">ContainerAppEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetIdInput">infrastructureSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabledInput">internalLoadBalancerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetId">infrastructureSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabled">internalLoadBalancerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultDomain`<sup>Required</sup> <a name="defaultDomain" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.defaultDomain"></a>

```typescript
public readonly defaultDomain: string;
```

- *Type:* string

---

##### `dockerBridgeCidr`<sup>Required</sup> <a name="dockerBridgeCidr" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dockerBridgeCidr"></a>

```typescript
public readonly dockerBridgeCidr: string;
```

- *Type:* string

---

##### `platformReservedCidr`<sup>Required</sup> <a name="platformReservedCidr" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedCidr"></a>

```typescript
public readonly platformReservedCidr: string;
```

- *Type:* string

---

##### `platformReservedDnsIpAddress`<sup>Required</sup> <a name="platformReservedDnsIpAddress" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedDnsIpAddress"></a>

```typescript
public readonly platformReservedDnsIpAddress: string;
```

- *Type:* string

---

##### `staticIpAddress`<sup>Required</sup> <a name="staticIpAddress" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.staticIpAddress"></a>

```typescript
public readonly staticIpAddress: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAppEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference">ContainerAppEnvironmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `infrastructureSubnetIdInput`<sup>Optional</sup> <a name="infrastructureSubnetIdInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetIdInput"></a>

```typescript
public readonly infrastructureSubnetIdInput: string;
```

- *Type:* string

---

##### `internalLoadBalancerEnabledInput`<sup>Optional</sup> <a name="internalLoadBalancerEnabledInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabledInput"></a>

```typescript
public readonly internalLoadBalancerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerAppEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureSubnetId`<sup>Required</sup> <a name="infrastructureSubnetId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetId"></a>

```typescript
public readonly infrastructureSubnetId: string;
```

- *Type:* string

---

##### `internalLoadBalancerEnabled`<sup>Required</sup> <a name="internalLoadBalancerEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabled"></a>

```typescript
public readonly internalLoadBalancerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentConfig <a name="ContainerAppEnvironmentConfig" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.Initializer"></a>

```typescript
import { containerAppEnvironment } from '@cdktf/provider-azurerm'

const containerAppEnvironmentConfig: containerAppEnvironment.ContainerAppEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.name">name</a></code> | <code>string</code> | The name of the Container Apps Managed Environment. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.infrastructureSubnetId">infrastructureSubnetId</a></code> | <code>string</code> | The existing Subnet to use for the Container Apps Control Plane. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.internalLoadBalancerEnabled">internalLoadBalancerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Container Environment operate in Internal Load Balancing Mode? |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Container Apps Managed Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureSubnetId`<sup>Optional</sup> <a name="infrastructureSubnetId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.infrastructureSubnetId"></a>

```typescript
public readonly infrastructureSubnetId: string;
```

- *Type:* string

The existing Subnet to use for the Container Apps Control Plane.

**NOTE:** The Subnet must have a `/21` or larger address space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#infrastructure_subnet_id ContainerAppEnvironment#infrastructure_subnet_id}

---

##### `internalLoadBalancerEnabled`<sup>Optional</sup> <a name="internalLoadBalancerEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.internalLoadBalancerEnabled"></a>

```typescript
public readonly internalLoadBalancerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Container Environment operate in Internal Load Balancing Mode?

Defaults to `false`. **Note:** can only be set to `true` if `infrastructure_subnet_id` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#internal_load_balancer_enabled ContainerAppEnvironment#internal_load_balancer_enabled}

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#log_analytics_workspace_id ContainerAppEnvironment#log_analytics_workspace_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAppEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#timeouts ContainerAppEnvironment#timeouts}

---

### ContainerAppEnvironmentTimeouts <a name="ContainerAppEnvironmentTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.Initializer"></a>

```typescript
import { containerAppEnvironment } from '@cdktf/provider-azurerm'

const containerAppEnvironmentTimeouts: containerAppEnvironment.ContainerAppEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#create ContainerAppEnvironment#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#delete ContainerAppEnvironment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#read ContainerAppEnvironment#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#update ContainerAppEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#create ContainerAppEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#delete ContainerAppEnvironment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#read ContainerAppEnvironment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/container_app_environment#update ContainerAppEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentTimeoutsOutputReference <a name="ContainerAppEnvironmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerAppEnvironment } from '@cdktf/provider-azurerm'

new containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAppEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

---



