# `azurerm_container_registry_token`

Refer to the Terraform Registory for docs: [`azurerm_container_registry_token`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token).

# `containerRegistryToken` Submodule <a name="`containerRegistryToken` Submodule" id="@cdktf/provider-azurerm.containerRegistryToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryToken <a name="ContainerRegistryToken" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token azurerm_container_registry_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.Initializer"></a>

```typescript
import { containerRegistryToken } from '@cdktf/provider-azurerm'

new containerRegistryToken.ContainerRegistryToken(scope: Construct, id: string, config: ContainerRegistryTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig">ContainerRegistryTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig">ContainerRegistryTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerRegistryTokenTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.isConstruct"></a>

```typescript
import { containerRegistryToken } from '@cdktf/provider-azurerm'

containerRegistryToken.ContainerRegistryToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.isTerraformElement"></a>

```typescript
import { containerRegistryToken } from '@cdktf/provider-azurerm'

containerRegistryToken.ContainerRegistryToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.isTerraformResource"></a>

```typescript
import { containerRegistryToken } from '@cdktf/provider-azurerm'

containerRegistryToken.ContainerRegistryToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference">ContainerRegistryTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.containerRegistryNameInput">containerRegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.scopeMapIdInput">scopeMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.containerRegistryName">containerRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.scopeMapId">scopeMapId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerRegistryTokenTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference">ContainerRegistryTokenTimeoutsOutputReference</a>

---

##### `containerRegistryNameInput`<sup>Optional</sup> <a name="containerRegistryNameInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.containerRegistryNameInput"></a>

```typescript
public readonly containerRegistryNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `scopeMapIdInput`<sup>Optional</sup> <a name="scopeMapIdInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.scopeMapIdInput"></a>

```typescript
public readonly scopeMapIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerRegistryTokenTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.containerRegistryName"></a>

```typescript
public readonly containerRegistryName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `scopeMapId`<sup>Required</sup> <a name="scopeMapId" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.scopeMapId"></a>

```typescript
public readonly scopeMapId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryTokenConfig <a name="ContainerRegistryTokenConfig" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.Initializer"></a>

```typescript
import { containerRegistryToken } from '@cdktf/provider-azurerm'

const containerRegistryTokenConfig: containerRegistryToken.ContainerRegistryTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.containerRegistryName">containerRegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#container_registry_name ContainerRegistryToken#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#name ContainerRegistryToken#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#resource_group_name ContainerRegistryToken#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.scopeMapId">scopeMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#scope_map_id ContainerRegistryToken#scope_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#enabled ContainerRegistryToken#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#id ContainerRegistryToken#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.containerRegistryName"></a>

```typescript
public readonly containerRegistryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#container_registry_name ContainerRegistryToken#container_registry_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#name ContainerRegistryToken#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#resource_group_name ContainerRegistryToken#resource_group_name}.

---

##### `scopeMapId`<sup>Required</sup> <a name="scopeMapId" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.scopeMapId"></a>

```typescript
public readonly scopeMapId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#scope_map_id ContainerRegistryToken#scope_map_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#enabled ContainerRegistryToken#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#id ContainerRegistryToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerRegistryTokenTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#timeouts ContainerRegistryToken#timeouts}

---

### ContainerRegistryTokenTimeouts <a name="ContainerRegistryTokenTimeouts" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts.Initializer"></a>

```typescript
import { containerRegistryToken } from '@cdktf/provider-azurerm'

const containerRegistryTokenTimeouts: containerRegistryToken.ContainerRegistryTokenTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#create ContainerRegistryToken#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#delete ContainerRegistryToken#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#read ContainerRegistryToken#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#update ContainerRegistryToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#create ContainerRegistryToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#delete ContainerRegistryToken#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#read ContainerRegistryToken#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/container_registry_token#update ContainerRegistryToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryTokenTimeoutsOutputReference <a name="ContainerRegistryTokenTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerRegistryToken } from '@cdktf/provider-azurerm'

new containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerRegistryTokenTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>

---



