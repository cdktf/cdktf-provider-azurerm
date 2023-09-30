# `azurerm_network_manager_admin_rule_collection`

Refer to the Terraform Registory for docs: [`azurerm_network_manager_admin_rule_collection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection).

# `networkManagerAdminRuleCollection` Submodule <a name="`networkManagerAdminRuleCollection` Submodule" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerAdminRuleCollection <a name="NetworkManagerAdminRuleCollection" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection azurerm_network_manager_admin_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer"></a>

```typescript
import { networkManagerAdminRuleCollection } from '@cdktf/provider-azurerm'

new networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection(scope: Construct, id: string, config: NetworkManagerAdminRuleCollectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig">NetworkManagerAdminRuleCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig">NetworkManagerAdminRuleCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkManagerAdminRuleCollectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isConstruct"></a>

```typescript
import { networkManagerAdminRuleCollection } from '@cdktf/provider-azurerm'

networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformElement"></a>

```typescript
import { networkManagerAdminRuleCollection } from '@cdktf/provider-azurerm'

networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformResource"></a>

```typescript
import { networkManagerAdminRuleCollection } from '@cdktf/provider-azurerm'

networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference">NetworkManagerAdminRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.networkGroupIdsInput">networkGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.securityAdminConfigurationIdInput">securityAdminConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.networkGroupIds">networkGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.securityAdminConfigurationId">securityAdminConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagerAdminRuleCollectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference">NetworkManagerAdminRuleCollectionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkGroupIdsInput`<sup>Optional</sup> <a name="networkGroupIdsInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.networkGroupIdsInput"></a>

```typescript
public readonly networkGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `securityAdminConfigurationIdInput`<sup>Optional</sup> <a name="securityAdminConfigurationIdInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.securityAdminConfigurationIdInput"></a>

```typescript
public readonly securityAdminConfigurationIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkManagerAdminRuleCollectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkGroupIds`<sup>Required</sup> <a name="networkGroupIds" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.networkGroupIds"></a>

```typescript
public readonly networkGroupIds: string[];
```

- *Type:* string[]

---

##### `securityAdminConfigurationId`<sup>Required</sup> <a name="securityAdminConfigurationId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.securityAdminConfigurationId"></a>

```typescript
public readonly securityAdminConfigurationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerAdminRuleCollectionConfig <a name="NetworkManagerAdminRuleCollectionConfig" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.Initializer"></a>

```typescript
import { networkManagerAdminRuleCollection } from '@cdktf/provider-azurerm'

const networkManagerAdminRuleCollectionConfig: networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#name NetworkManagerAdminRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.networkGroupIds">networkGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#network_group_ids NetworkManagerAdminRuleCollection#network_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.securityAdminConfigurationId">securityAdminConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#security_admin_configuration_id NetworkManagerAdminRuleCollection#security_admin_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#description NetworkManagerAdminRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#id NetworkManagerAdminRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#name NetworkManagerAdminRuleCollection#name}.

---

##### `networkGroupIds`<sup>Required</sup> <a name="networkGroupIds" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.networkGroupIds"></a>

```typescript
public readonly networkGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#network_group_ids NetworkManagerAdminRuleCollection#network_group_ids}.

---

##### `securityAdminConfigurationId`<sup>Required</sup> <a name="securityAdminConfigurationId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.securityAdminConfigurationId"></a>

```typescript
public readonly securityAdminConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#security_admin_configuration_id NetworkManagerAdminRuleCollection#security_admin_configuration_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#description NetworkManagerAdminRuleCollection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#id NetworkManagerAdminRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagerAdminRuleCollectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#timeouts NetworkManagerAdminRuleCollection#timeouts}

---

### NetworkManagerAdminRuleCollectionTimeouts <a name="NetworkManagerAdminRuleCollectionTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.Initializer"></a>

```typescript
import { networkManagerAdminRuleCollection } from '@cdktf/provider-azurerm'

const networkManagerAdminRuleCollectionTimeouts: networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#create NetworkManagerAdminRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#delete NetworkManagerAdminRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#read NetworkManagerAdminRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#update NetworkManagerAdminRuleCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#create NetworkManagerAdminRuleCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#delete NetworkManagerAdminRuleCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#read NetworkManagerAdminRuleCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/network_manager_admin_rule_collection#update NetworkManagerAdminRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerAdminRuleCollectionTimeoutsOutputReference <a name="NetworkManagerAdminRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkManagerAdminRuleCollection } from '@cdktf/provider-azurerm'

new networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagerAdminRuleCollectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a>

---



