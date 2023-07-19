# `azurerm_video_analyzer_edge_module`

Refer to the Terraform Registory for docs: [`azurerm_video_analyzer_edge_module`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module).

# `videoAnalyzerEdgeModule` Submodule <a name="`videoAnalyzerEdgeModule` Submodule" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VideoAnalyzerEdgeModule <a name="VideoAnalyzerEdgeModule" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module azurerm_video_analyzer_edge_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer"></a>

```typescript
import { videoAnalyzerEdgeModule } from '@cdktf/provider-azurerm'

new videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule(scope: Construct, id: string, config: VideoAnalyzerEdgeModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig">VideoAnalyzerEdgeModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig">VideoAnalyzerEdgeModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.putTimeouts"></a>

```typescript
public putTimeouts(value: VideoAnalyzerEdgeModuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isConstruct"></a>

```typescript
import { videoAnalyzerEdgeModule } from '@cdktf/provider-azurerm'

videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformElement"></a>

```typescript
import { videoAnalyzerEdgeModule } from '@cdktf/provider-azurerm'

videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformResource"></a>

```typescript
import { videoAnalyzerEdgeModule } from '@cdktf/provider-azurerm'

videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference">VideoAnalyzerEdgeModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerNameInput">videoAnalyzerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerName">videoAnalyzerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeouts"></a>

```typescript
public readonly timeouts: VideoAnalyzerEdgeModuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference">VideoAnalyzerEdgeModuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VideoAnalyzerEdgeModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a>

---

##### `videoAnalyzerNameInput`<sup>Optional</sup> <a name="videoAnalyzerNameInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerNameInput"></a>

```typescript
public readonly videoAnalyzerNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `videoAnalyzerName`<sup>Required</sup> <a name="videoAnalyzerName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerName"></a>

```typescript
public readonly videoAnalyzerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VideoAnalyzerEdgeModuleConfig <a name="VideoAnalyzerEdgeModuleConfig" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.Initializer"></a>

```typescript
import { videoAnalyzerEdgeModule } from '@cdktf/provider-azurerm'

const videoAnalyzerEdgeModuleConfig: videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#name VideoAnalyzerEdgeModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#resource_group_name VideoAnalyzerEdgeModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.videoAnalyzerName">videoAnalyzerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#video_analyzer_name VideoAnalyzerEdgeModule#video_analyzer_name}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#id VideoAnalyzerEdgeModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#name VideoAnalyzerEdgeModule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#resource_group_name VideoAnalyzerEdgeModule#resource_group_name}.

---

##### `videoAnalyzerName`<sup>Required</sup> <a name="videoAnalyzerName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.videoAnalyzerName"></a>

```typescript
public readonly videoAnalyzerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#video_analyzer_name VideoAnalyzerEdgeModule#video_analyzer_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#id VideoAnalyzerEdgeModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VideoAnalyzerEdgeModuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#timeouts VideoAnalyzerEdgeModule#timeouts}

---

### VideoAnalyzerEdgeModuleTimeouts <a name="VideoAnalyzerEdgeModuleTimeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.Initializer"></a>

```typescript
import { videoAnalyzerEdgeModule } from '@cdktf/provider-azurerm'

const videoAnalyzerEdgeModuleTimeouts: videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#create VideoAnalyzerEdgeModule#create}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#delete VideoAnalyzerEdgeModule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#read VideoAnalyzerEdgeModule#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#create VideoAnalyzerEdgeModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#delete VideoAnalyzerEdgeModule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/video_analyzer_edge_module#read VideoAnalyzerEdgeModule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VideoAnalyzerEdgeModuleTimeoutsOutputReference <a name="VideoAnalyzerEdgeModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { videoAnalyzerEdgeModule } from '@cdktf/provider-azurerm'

new videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VideoAnalyzerEdgeModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a>

---



