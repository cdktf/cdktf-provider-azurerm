# `azurerm_media_transform`

Refer to the Terraform Registory for docs: [`azurerm_media_transform`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform).

# `mediaTransform` Submodule <a name="`mediaTransform` Submodule" id="@cdktf/provider-azurerm.mediaTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaTransform <a name="MediaTransform" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform azurerm_media_transform}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

new mediaTransform.MediaTransform(scope: Construct, id: string, config: MediaTransformConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig">MediaTransformConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig">MediaTransformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putOutput"></a>

```typescript
public putOutput(value: IResolvable | MediaTransformOutput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putOutput.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts"></a>

```typescript
public putTimeouts(value: MediaTransformTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOutput"></a>

```typescript
public resetOutput(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isConstruct"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

mediaTransform.MediaTransform.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformElement"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

mediaTransform.MediaTransform.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformResource"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

mediaTransform.MediaTransform.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList">MediaTransformOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference">MediaTransformTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountNameInput">mediaServicesAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.outputInput">outputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.output"></a>

```typescript
public readonly output: MediaTransformOutputList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList">MediaTransformOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeouts"></a>

```typescript
public readonly timeouts: MediaTransformTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference">MediaTransformTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mediaServicesAccountNameInput`<sup>Optional</sup> <a name="mediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountNameInput"></a>

```typescript
public readonly mediaServicesAccountNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.outputInput"></a>

```typescript
public readonly outputInput: IResolvable | MediaTransformOutput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MediaTransformTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountName"></a>

```typescript
public readonly mediaServicesAccountName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaTransformConfig <a name="MediaTransformConfig" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

const mediaTransformConfig: mediaTransform.MediaTransformConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#media_services_account_name MediaTransform#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#name MediaTransform#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#resource_group_name MediaTransform#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#description MediaTransform#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#id MediaTransform#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.output">output</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>[]</code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.mediaServicesAccountName"></a>

```typescript
public readonly mediaServicesAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#media_services_account_name MediaTransform#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#name MediaTransform#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#resource_group_name MediaTransform#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#description MediaTransform#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#id MediaTransform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.output"></a>

```typescript
public readonly output: IResolvable | MediaTransformOutput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>[]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#output MediaTransform#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaTransformTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#timeouts MediaTransform#timeouts}

---

### MediaTransformOutput <a name="MediaTransformOutput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

const mediaTransformOutput: mediaTransform.MediaTransformOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.audioAnalyzerPreset">audioAnalyzerPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a></code> | audio_analyzer_preset block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.builtinPreset">builtinPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a></code> | builtin_preset block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.faceDetectorPreset">faceDetectorPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a></code> | face_detector_preset block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.onErrorAction">onErrorAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#on_error_action MediaTransform#on_error_action}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.relativePriority">relativePriority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#relative_priority MediaTransform#relative_priority}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.videoAnalyzerPreset">videoAnalyzerPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a></code> | video_analyzer_preset block. |

---

##### `audioAnalyzerPreset`<sup>Optional</sup> <a name="audioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.audioAnalyzerPreset"></a>

```typescript
public readonly audioAnalyzerPreset: MediaTransformOutputAudioAnalyzerPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

audio_analyzer_preset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analyzer_preset MediaTransform#audio_analyzer_preset}

---

##### `builtinPreset`<sup>Optional</sup> <a name="builtinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.builtinPreset"></a>

```typescript
public readonly builtinPreset: MediaTransformOutputBuiltinPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

builtin_preset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#builtin_preset MediaTransform#builtin_preset}

---

##### `faceDetectorPreset`<sup>Optional</sup> <a name="faceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.faceDetectorPreset"></a>

```typescript
public readonly faceDetectorPreset: MediaTransformOutputFaceDetectorPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

face_detector_preset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#face_detector_preset MediaTransform#face_detector_preset}

---

##### `onErrorAction`<sup>Optional</sup> <a name="onErrorAction" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.onErrorAction"></a>

```typescript
public readonly onErrorAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#on_error_action MediaTransform#on_error_action}.

---

##### `relativePriority`<sup>Optional</sup> <a name="relativePriority" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.relativePriority"></a>

```typescript
public readonly relativePriority: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#relative_priority MediaTransform#relative_priority}.

---

##### `videoAnalyzerPreset`<sup>Optional</sup> <a name="videoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.videoAnalyzerPreset"></a>

```typescript
public readonly videoAnalyzerPreset: MediaTransformOutputVideoAnalyzerPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

video_analyzer_preset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#video_analyzer_preset MediaTransform#video_analyzer_preset}

---

### MediaTransformOutputAudioAnalyzerPreset <a name="MediaTransformOutputAudioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

const mediaTransformOutputAudioAnalyzerPreset: mediaTransform.MediaTransformOutputAudioAnalyzerPreset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioAnalysisMode">audioAnalysisMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioLanguage">audioLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}. |

---

##### `audioAnalysisMode`<sup>Optional</sup> <a name="audioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioAnalysisMode"></a>

```typescript
public readonly audioAnalysisMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}.

---

##### `audioLanguage`<sup>Optional</sup> <a name="audioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioLanguage"></a>

```typescript
public readonly audioLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}.

---

### MediaTransformOutputBuiltinPreset <a name="MediaTransformOutputBuiltinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

const mediaTransformOutputBuiltinPreset: mediaTransform.MediaTransformOutputBuiltinPreset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset.property.presetName">presetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#preset_name MediaTransform#preset_name}. |

---

##### `presetName`<sup>Required</sup> <a name="presetName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset.property.presetName"></a>

```typescript
public readonly presetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#preset_name MediaTransform#preset_name}.

---

### MediaTransformOutputFaceDetectorPreset <a name="MediaTransformOutputFaceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

const mediaTransformOutputFaceDetectorPreset: mediaTransform.MediaTransformOutputFaceDetectorPreset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset.property.analysisResolution">analysisResolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#analysis_resolution MediaTransform#analysis_resolution}. |

---

##### `analysisResolution`<sup>Optional</sup> <a name="analysisResolution" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset.property.analysisResolution"></a>

```typescript
public readonly analysisResolution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#analysis_resolution MediaTransform#analysis_resolution}.

---

### MediaTransformOutputVideoAnalyzerPreset <a name="MediaTransformOutputVideoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

const mediaTransformOutputVideoAnalyzerPreset: mediaTransform.MediaTransformOutputVideoAnalyzerPreset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioAnalysisMode">audioAnalysisMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioLanguage">audioLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.insightsType">insightsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#insights_type MediaTransform#insights_type}. |

---

##### `audioAnalysisMode`<sup>Optional</sup> <a name="audioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioAnalysisMode"></a>

```typescript
public readonly audioAnalysisMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}.

---

##### `audioLanguage`<sup>Optional</sup> <a name="audioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioLanguage"></a>

```typescript
public readonly audioLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}.

---

##### `insightsType`<sup>Optional</sup> <a name="insightsType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.insightsType"></a>

```typescript
public readonly insightsType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#insights_type MediaTransform#insights_type}.

---

### MediaTransformTimeouts <a name="MediaTransformTimeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

const mediaTransformTimeouts: mediaTransform.MediaTransformTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#create MediaTransform#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#delete MediaTransform#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#read MediaTransform#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#update MediaTransform#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#create MediaTransform#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#delete MediaTransform#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#read MediaTransform#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#update MediaTransform#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaTransformOutputAudioAnalyzerPresetOutputReference <a name="MediaTransformOutputAudioAnalyzerPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

new mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioAnalysisMode">resetAudioAnalysisMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioLanguage">resetAudioLanguage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioAnalysisMode` <a name="resetAudioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioAnalysisMode"></a>

```typescript
public resetAudioAnalysisMode(): void
```

##### `resetAudioLanguage` <a name="resetAudioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioLanguage"></a>

```typescript
public resetAudioLanguage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisModeInput">audioAnalysisModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguageInput">audioLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisMode">audioAnalysisMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguage">audioLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioAnalysisModeInput`<sup>Optional</sup> <a name="audioAnalysisModeInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisModeInput"></a>

```typescript
public readonly audioAnalysisModeInput: string;
```

- *Type:* string

---

##### `audioLanguageInput`<sup>Optional</sup> <a name="audioLanguageInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguageInput"></a>

```typescript
public readonly audioLanguageInput: string;
```

- *Type:* string

---

##### `audioAnalysisMode`<sup>Required</sup> <a name="audioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisMode"></a>

```typescript
public readonly audioAnalysisMode: string;
```

- *Type:* string

---

##### `audioLanguage`<sup>Required</sup> <a name="audioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguage"></a>

```typescript
public readonly audioLanguage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaTransformOutputAudioAnalyzerPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

---


### MediaTransformOutputBuiltinPresetOutputReference <a name="MediaTransformOutputBuiltinPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

new mediaTransform.MediaTransformOutputBuiltinPresetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetNameInput">presetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetName">presetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `presetNameInput`<sup>Optional</sup> <a name="presetNameInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetNameInput"></a>

```typescript
public readonly presetNameInput: string;
```

- *Type:* string

---

##### `presetName`<sup>Required</sup> <a name="presetName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetName"></a>

```typescript
public readonly presetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaTransformOutputBuiltinPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

---


### MediaTransformOutputFaceDetectorPresetOutputReference <a name="MediaTransformOutputFaceDetectorPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

new mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resetAnalysisResolution">resetAnalysisResolution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnalysisResolution` <a name="resetAnalysisResolution" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resetAnalysisResolution"></a>

```typescript
public resetAnalysisResolution(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolutionInput">analysisResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolution">analysisResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysisResolutionInput`<sup>Optional</sup> <a name="analysisResolutionInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolutionInput"></a>

```typescript
public readonly analysisResolutionInput: string;
```

- *Type:* string

---

##### `analysisResolution`<sup>Required</sup> <a name="analysisResolution" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolution"></a>

```typescript
public readonly analysisResolution: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaTransformOutputFaceDetectorPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

---


### MediaTransformOutputList <a name="MediaTransformOutputList" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

new mediaTransform.MediaTransformOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.get"></a>

```typescript
public get(index: number): MediaTransformOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaTransformOutput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>[]

---


### MediaTransformOutputOutputReference <a name="MediaTransformOutputOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

new mediaTransform.MediaTransformOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putAudioAnalyzerPreset">putAudioAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putBuiltinPreset">putBuiltinPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putFaceDetectorPreset">putFaceDetectorPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset">putVideoAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetAudioAnalyzerPreset">resetAudioAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetBuiltinPreset">resetBuiltinPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetFaceDetectorPreset">resetFaceDetectorPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetOnErrorAction">resetOnErrorAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetRelativePriority">resetRelativePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetVideoAnalyzerPreset">resetVideoAnalyzerPreset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioAnalyzerPreset` <a name="putAudioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putAudioAnalyzerPreset"></a>

```typescript
public putAudioAnalyzerPreset(value: MediaTransformOutputAudioAnalyzerPreset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putAudioAnalyzerPreset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

---

##### `putBuiltinPreset` <a name="putBuiltinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putBuiltinPreset"></a>

```typescript
public putBuiltinPreset(value: MediaTransformOutputBuiltinPreset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putBuiltinPreset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

---

##### `putFaceDetectorPreset` <a name="putFaceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putFaceDetectorPreset"></a>

```typescript
public putFaceDetectorPreset(value: MediaTransformOutputFaceDetectorPreset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putFaceDetectorPreset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

---

##### `putVideoAnalyzerPreset` <a name="putVideoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset"></a>

```typescript
public putVideoAnalyzerPreset(value: MediaTransformOutputVideoAnalyzerPreset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

---

##### `resetAudioAnalyzerPreset` <a name="resetAudioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetAudioAnalyzerPreset"></a>

```typescript
public resetAudioAnalyzerPreset(): void
```

##### `resetBuiltinPreset` <a name="resetBuiltinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetBuiltinPreset"></a>

```typescript
public resetBuiltinPreset(): void
```

##### `resetFaceDetectorPreset` <a name="resetFaceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetFaceDetectorPreset"></a>

```typescript
public resetFaceDetectorPreset(): void
```

##### `resetOnErrorAction` <a name="resetOnErrorAction" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetOnErrorAction"></a>

```typescript
public resetOnErrorAction(): void
```

##### `resetRelativePriority` <a name="resetRelativePriority" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetRelativePriority"></a>

```typescript
public resetRelativePriority(): void
```

##### `resetVideoAnalyzerPreset` <a name="resetVideoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetVideoAnalyzerPreset"></a>

```typescript
public resetVideoAnalyzerPreset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPreset">audioAnalyzerPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference">MediaTransformOutputAudioAnalyzerPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPreset">builtinPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference">MediaTransformOutputBuiltinPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPreset">faceDetectorPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference">MediaTransformOutputFaceDetectorPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPreset">videoAnalyzerPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference">MediaTransformOutputVideoAnalyzerPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPresetInput">audioAnalyzerPresetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPresetInput">builtinPresetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPresetInput">faceDetectorPresetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorActionInput">onErrorActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriorityInput">relativePriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPresetInput">videoAnalyzerPresetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorAction">onErrorAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriority">relativePriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioAnalyzerPreset`<sup>Required</sup> <a name="audioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPreset"></a>

```typescript
public readonly audioAnalyzerPreset: MediaTransformOutputAudioAnalyzerPresetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference">MediaTransformOutputAudioAnalyzerPresetOutputReference</a>

---

##### `builtinPreset`<sup>Required</sup> <a name="builtinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPreset"></a>

```typescript
public readonly builtinPreset: MediaTransformOutputBuiltinPresetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference">MediaTransformOutputBuiltinPresetOutputReference</a>

---

##### `faceDetectorPreset`<sup>Required</sup> <a name="faceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPreset"></a>

```typescript
public readonly faceDetectorPreset: MediaTransformOutputFaceDetectorPresetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference">MediaTransformOutputFaceDetectorPresetOutputReference</a>

---

##### `videoAnalyzerPreset`<sup>Required</sup> <a name="videoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPreset"></a>

```typescript
public readonly videoAnalyzerPreset: MediaTransformOutputVideoAnalyzerPresetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference">MediaTransformOutputVideoAnalyzerPresetOutputReference</a>

---

##### `audioAnalyzerPresetInput`<sup>Optional</sup> <a name="audioAnalyzerPresetInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPresetInput"></a>

```typescript
public readonly audioAnalyzerPresetInput: MediaTransformOutputAudioAnalyzerPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

---

##### `builtinPresetInput`<sup>Optional</sup> <a name="builtinPresetInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPresetInput"></a>

```typescript
public readonly builtinPresetInput: MediaTransformOutputBuiltinPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

---

##### `faceDetectorPresetInput`<sup>Optional</sup> <a name="faceDetectorPresetInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPresetInput"></a>

```typescript
public readonly faceDetectorPresetInput: MediaTransformOutputFaceDetectorPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

---

##### `onErrorActionInput`<sup>Optional</sup> <a name="onErrorActionInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorActionInput"></a>

```typescript
public readonly onErrorActionInput: string;
```

- *Type:* string

---

##### `relativePriorityInput`<sup>Optional</sup> <a name="relativePriorityInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriorityInput"></a>

```typescript
public readonly relativePriorityInput: string;
```

- *Type:* string

---

##### `videoAnalyzerPresetInput`<sup>Optional</sup> <a name="videoAnalyzerPresetInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPresetInput"></a>

```typescript
public readonly videoAnalyzerPresetInput: MediaTransformOutputVideoAnalyzerPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

---

##### `onErrorAction`<sup>Required</sup> <a name="onErrorAction" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorAction"></a>

```typescript
public readonly onErrorAction: string;
```

- *Type:* string

---

##### `relativePriority`<sup>Required</sup> <a name="relativePriority" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriority"></a>

```typescript
public readonly relativePriority: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaTransformOutput | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a> | cdktf.IResolvable

---


### MediaTransformOutputVideoAnalyzerPresetOutputReference <a name="MediaTransformOutputVideoAnalyzerPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

new mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioAnalysisMode">resetAudioAnalysisMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioLanguage">resetAudioLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetInsightsType">resetInsightsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioAnalysisMode` <a name="resetAudioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioAnalysisMode"></a>

```typescript
public resetAudioAnalysisMode(): void
```

##### `resetAudioLanguage` <a name="resetAudioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioLanguage"></a>

```typescript
public resetAudioLanguage(): void
```

##### `resetInsightsType` <a name="resetInsightsType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetInsightsType"></a>

```typescript
public resetInsightsType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisModeInput">audioAnalysisModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguageInput">audioLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsTypeInput">insightsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisMode">audioAnalysisMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguage">audioLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsType">insightsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioAnalysisModeInput`<sup>Optional</sup> <a name="audioAnalysisModeInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisModeInput"></a>

```typescript
public readonly audioAnalysisModeInput: string;
```

- *Type:* string

---

##### `audioLanguageInput`<sup>Optional</sup> <a name="audioLanguageInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguageInput"></a>

```typescript
public readonly audioLanguageInput: string;
```

- *Type:* string

---

##### `insightsTypeInput`<sup>Optional</sup> <a name="insightsTypeInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsTypeInput"></a>

```typescript
public readonly insightsTypeInput: string;
```

- *Type:* string

---

##### `audioAnalysisMode`<sup>Required</sup> <a name="audioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisMode"></a>

```typescript
public readonly audioAnalysisMode: string;
```

- *Type:* string

---

##### `audioLanguage`<sup>Required</sup> <a name="audioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguage"></a>

```typescript
public readonly audioLanguage: string;
```

- *Type:* string

---

##### `insightsType`<sup>Required</sup> <a name="insightsType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsType"></a>

```typescript
public readonly insightsType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaTransformOutputVideoAnalyzerPreset;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

---


### MediaTransformTimeoutsOutputReference <a name="MediaTransformTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer"></a>

```typescript
import { mediaTransform } from '@cdktf/provider-azurerm'

new mediaTransform.MediaTransformTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaTransformTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a> | cdktf.IResolvable

---



