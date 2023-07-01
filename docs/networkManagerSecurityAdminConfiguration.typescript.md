# `azurerm_network_manager_security_admin_configuration`

Refer to the Terraform Registory for docs: [`azurerm_network_manager_security_admin_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration).

# `networkManagerSecurityAdminConfiguration` Submodule <a name="`networkManagerSecurityAdminConfiguration` Submodule" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerSecurityAdminConfiguration <a name="NetworkManagerSecurityAdminConfiguration" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration azurerm_network_manager_security_admin_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer"></a>

```typescript
import { networkManagerSecurityAdminConfiguration } from '@cdktf/provider-azurerm'

new networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration(scope: Construct, id: string, config: NetworkManagerSecurityAdminConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig">NetworkManagerSecurityAdminConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig">NetworkManagerSecurityAdminConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetApplyOnNetworkIntentPolicyBasedServices">resetApplyOnNetworkIntentPolicyBasedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkManagerSecurityAdminConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

---

##### `resetApplyOnNetworkIntentPolicyBasedServices` <a name="resetApplyOnNetworkIntentPolicyBasedServices" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetApplyOnNetworkIntentPolicyBasedServices"></a>

```typescript
public resetApplyOnNetworkIntentPolicyBasedServices(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct"></a>

```typescript
import { networkManagerSecurityAdminConfiguration } from '@cdktf/provider-azurerm'

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement"></a>

```typescript
import { networkManagerSecurityAdminConfiguration } from '@cdktf/provider-azurerm'

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource"></a>

```typescript
import { networkManagerSecurityAdminConfiguration } from '@cdktf/provider-azurerm'

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference">NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServicesInput">applyOnNetworkIntentPolicyBasedServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerIdInput">networkManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServices">applyOnNetworkIntentPolicyBasedServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerId">networkManagerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference">NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference</a>

---

##### `applyOnNetworkIntentPolicyBasedServicesInput`<sup>Optional</sup> <a name="applyOnNetworkIntentPolicyBasedServicesInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServicesInput"></a>

```typescript
public readonly applyOnNetworkIntentPolicyBasedServicesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkManagerIdInput`<sup>Optional</sup> <a name="networkManagerIdInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerIdInput"></a>

```typescript
public readonly networkManagerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkManagerSecurityAdminConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

---

##### `applyOnNetworkIntentPolicyBasedServices`<sup>Required</sup> <a name="applyOnNetworkIntentPolicyBasedServices" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServices"></a>

```typescript
public readonly applyOnNetworkIntentPolicyBasedServices: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkManagerId`<sup>Required</sup> <a name="networkManagerId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerId"></a>

```typescript
public readonly networkManagerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerSecurityAdminConfigurationConfig <a name="NetworkManagerSecurityAdminConfigurationConfig" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.Initializer"></a>

```typescript
import { networkManagerSecurityAdminConfiguration } from '@cdktf/provider-azurerm'

const networkManagerSecurityAdminConfigurationConfig: networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#name NetworkManagerSecurityAdminConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.networkManagerId">networkManagerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#network_manager_id NetworkManagerSecurityAdminConfiguration#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.applyOnNetworkIntentPolicyBasedServices">applyOnNetworkIntentPolicyBasedServices</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#apply_on_network_intent_policy_based_services NetworkManagerSecurityAdminConfiguration#apply_on_network_intent_policy_based_services}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#description NetworkManagerSecurityAdminConfiguration#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#id NetworkManagerSecurityAdminConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#name NetworkManagerSecurityAdminConfiguration#name}.

---

##### `networkManagerId`<sup>Required</sup> <a name="networkManagerId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.networkManagerId"></a>

```typescript
public readonly networkManagerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#network_manager_id NetworkManagerSecurityAdminConfiguration#network_manager_id}.

---

##### `applyOnNetworkIntentPolicyBasedServices`<sup>Optional</sup> <a name="applyOnNetworkIntentPolicyBasedServices" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.applyOnNetworkIntentPolicyBasedServices"></a>

```typescript
public readonly applyOnNetworkIntentPolicyBasedServices: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#apply_on_network_intent_policy_based_services NetworkManagerSecurityAdminConfiguration#apply_on_network_intent_policy_based_services}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#description NetworkManagerSecurityAdminConfiguration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#id NetworkManagerSecurityAdminConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagerSecurityAdminConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#timeouts NetworkManagerSecurityAdminConfiguration#timeouts}

---

### NetworkManagerSecurityAdminConfigurationTimeouts <a name="NetworkManagerSecurityAdminConfigurationTimeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.Initializer"></a>

```typescript
import { networkManagerSecurityAdminConfiguration } from '@cdktf/provider-azurerm'

const networkManagerSecurityAdminConfigurationTimeouts: networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#create NetworkManagerSecurityAdminConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#delete NetworkManagerSecurityAdminConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#read NetworkManagerSecurityAdminConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#update NetworkManagerSecurityAdminConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#create NetworkManagerSecurityAdminConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#delete NetworkManagerSecurityAdminConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#read NetworkManagerSecurityAdminConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/network_manager_security_admin_configuration#update NetworkManagerSecurityAdminConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference <a name="NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkManagerSecurityAdminConfiguration } from '@cdktf/provider-azurerm'

new networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagerSecurityAdminConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

---



