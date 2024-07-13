# `mediaContentKeyPolicy` Submodule <a name="`mediaContentKeyPolicy` Submodule" id="@cdktf/provider-azurerm.mediaContentKeyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaContentKeyPolicy <a name="MediaContentKeyPolicy" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy azurerm_media_content_key_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicy(scope: Construct, id: string, config: MediaContentKeyPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig">MediaContentKeyPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig">MediaContentKeyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption">putPolicyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyOption` <a name="putPolicyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption"></a>

```typescript
public putPolicyOption(value: IResolvable | MediaContentKeyPolicyPolicyOption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: MediaContentKeyPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaContentKeyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MediaContentKeyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaContentKeyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaContentKeyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaContentKeyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOption">policyOption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList">MediaContentKeyPolicyPolicyOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference">MediaContentKeyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountNameInput">mediaServicesAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOptionInput">policyOptionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyOption`<sup>Required</sup> <a name="policyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOption"></a>

```typescript
public readonly policyOption: MediaContentKeyPolicyPolicyOptionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList">MediaContentKeyPolicyPolicyOptionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: MediaContentKeyPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference">MediaContentKeyPolicyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mediaServicesAccountNameInput`<sup>Optional</sup> <a name="mediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountNameInput"></a>

```typescript
public readonly mediaServicesAccountNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyOptionInput`<sup>Optional</sup> <a name="policyOptionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOptionInput"></a>

```typescript
public readonly policyOptionInput: IResolvable | MediaContentKeyPolicyPolicyOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MediaContentKeyPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountName"></a>

```typescript
public readonly mediaServicesAccountName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaContentKeyPolicyConfig <a name="MediaContentKeyPolicyConfig" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyConfig: mediaContentKeyPolicy.MediaContentKeyPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.policyOption">policyOption</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>[]</code> | policy_option block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.mediaServicesAccountName"></a>

```typescript
public readonly mediaServicesAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}.

---

##### `policyOption`<sup>Required</sup> <a name="policyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.policyOption"></a>

```typescript
public readonly policyOption: IResolvable | MediaContentKeyPolicyPolicyOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>[]

policy_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#policy_option MediaContentKeyPolicy#policy_option}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaContentKeyPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#timeouts MediaContentKeyPolicy#timeouts}

---

### MediaContentKeyPolicyPolicyOption <a name="MediaContentKeyPolicyPolicyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyPolicyOption: mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.clearKeyConfigurationEnabled">clearKeyConfigurationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#clear_key_configuration_enabled MediaContentKeyPolicy#clear_key_configuration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.fairplayConfiguration">fairplayConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | fairplay_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.openRestrictionEnabled">openRestrictionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#open_restriction_enabled MediaContentKeyPolicy#open_restriction_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyConfigurationLicense">playreadyConfigurationLicense</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>[]</code> | playready_configuration_license block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyResponseCustomData">playreadyResponseCustomData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#playready_response_custom_data MediaContentKeyPolicy#playready_response_custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.tokenRestriction">tokenRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | token_restriction block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.widevineConfigurationTemplate">widevineConfigurationTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#widevine_configuration_template MediaContentKeyPolicy#widevine_configuration_template}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}.

---

##### `clearKeyConfigurationEnabled`<sup>Optional</sup> <a name="clearKeyConfigurationEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.clearKeyConfigurationEnabled"></a>

```typescript
public readonly clearKeyConfigurationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#clear_key_configuration_enabled MediaContentKeyPolicy#clear_key_configuration_enabled}.

---

##### `fairplayConfiguration`<sup>Optional</sup> <a name="fairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.fairplayConfiguration"></a>

```typescript
public readonly fairplayConfiguration: MediaContentKeyPolicyPolicyOptionFairplayConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

fairplay_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#fairplay_configuration MediaContentKeyPolicy#fairplay_configuration}

---

##### `openRestrictionEnabled`<sup>Optional</sup> <a name="openRestrictionEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.openRestrictionEnabled"></a>

```typescript
public readonly openRestrictionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#open_restriction_enabled MediaContentKeyPolicy#open_restriction_enabled}.

---

##### `playreadyConfigurationLicense`<sup>Optional</sup> <a name="playreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyConfigurationLicense"></a>

```typescript
public readonly playreadyConfigurationLicense: IResolvable | MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>[]

playready_configuration_license block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#playready_configuration_license MediaContentKeyPolicy#playready_configuration_license}

---

##### `playreadyResponseCustomData`<sup>Optional</sup> <a name="playreadyResponseCustomData" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyResponseCustomData"></a>

```typescript
public readonly playreadyResponseCustomData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#playready_response_custom_data MediaContentKeyPolicy#playready_response_custom_data}.

---

##### `tokenRestriction`<sup>Optional</sup> <a name="tokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.tokenRestriction"></a>

```typescript
public readonly tokenRestriction: MediaContentKeyPolicyPolicyOptionTokenRestriction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

token_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#token_restriction MediaContentKeyPolicy#token_restriction}

---

##### `widevineConfigurationTemplate`<sup>Optional</sup> <a name="widevineConfigurationTemplate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.widevineConfigurationTemplate"></a>

```typescript
public readonly widevineConfigurationTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#widevine_configuration_template MediaContentKeyPolicy#widevine_configuration_template}.

---

### MediaContentKeyPolicyPolicyOptionFairplayConfiguration <a name="MediaContentKeyPolicyPolicyOptionFairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyPolicyOptionFairplayConfiguration: mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.ask">ask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#ask MediaContentKeyPolicy#ask}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.offlineRentalConfiguration">offlineRentalConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | offline_rental_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfx">pfx</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#pfx MediaContentKeyPolicy#pfx}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfxPassword">pfxPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#pfx_password MediaContentKeyPolicy#pfx_password}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalAndLeaseKeyType">rentalAndLeaseKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalDurationSeconds">rentalDurationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}. |

---

##### `ask`<sup>Optional</sup> <a name="ask" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.ask"></a>

```typescript
public readonly ask: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#ask MediaContentKeyPolicy#ask}.

---

##### `offlineRentalConfiguration`<sup>Optional</sup> <a name="offlineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.offlineRentalConfiguration"></a>

```typescript
public readonly offlineRentalConfiguration: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

offline_rental_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#offline_rental_configuration MediaContentKeyPolicy#offline_rental_configuration}

---

##### `pfx`<sup>Optional</sup> <a name="pfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfx"></a>

```typescript
public readonly pfx: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#pfx MediaContentKeyPolicy#pfx}.

---

##### `pfxPassword`<sup>Optional</sup> <a name="pfxPassword" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfxPassword"></a>

```typescript
public readonly pfxPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#pfx_password MediaContentKeyPolicy#pfx_password}.

---

##### `rentalAndLeaseKeyType`<sup>Optional</sup> <a name="rentalAndLeaseKeyType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalAndLeaseKeyType"></a>

```typescript
public readonly rentalAndLeaseKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}.

---

##### `rentalDurationSeconds`<sup>Optional</sup> <a name="rentalDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalDurationSeconds"></a>

```typescript
public readonly rentalDurationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}.

---

### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration: mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.playbackDurationSeconds">playbackDurationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.storageDurationSeconds">storageDurationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}. |

---

##### `playbackDurationSeconds`<sup>Optional</sup> <a name="playbackDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.playbackDurationSeconds"></a>

```typescript
public readonly playbackDurationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}.

---

##### `storageDurationSeconds`<sup>Optional</sup> <a name="storageDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.storageDurationSeconds"></a>

```typescript
public readonly storageDurationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense: mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.allowTestDevices">allowTestDevices</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#allow_test_devices MediaContentKeyPolicy#allow_test_devices}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.beginDate">beginDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#begin_date MediaContentKeyPolicy#begin_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromHeaderEnabled">contentKeyLocationFromHeaderEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#content_key_location_from_header_enabled MediaContentKeyPolicy#content_key_location_from_header_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromKeyId">contentKeyLocationFromKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#content_key_location_from_key_id MediaContentKeyPolicy#content_key_location_from_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#content_type MediaContentKeyPolicy#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.expirationDate">expirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#expiration_date MediaContentKeyPolicy#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.gracePeriod">gracePeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#grace_period MediaContentKeyPolicy#grace_period}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#license_type MediaContentKeyPolicy#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.playRight">playRight</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | play_right block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeBeginDate">relativeBeginDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#relative_begin_date MediaContentKeyPolicy#relative_begin_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeExpirationDate">relativeExpirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#relative_expiration_date MediaContentKeyPolicy#relative_expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.securityLevel">securityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#security_level MediaContentKeyPolicy#security_level}. |

---

##### `allowTestDevices`<sup>Optional</sup> <a name="allowTestDevices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.allowTestDevices"></a>

```typescript
public readonly allowTestDevices: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#allow_test_devices MediaContentKeyPolicy#allow_test_devices}.

---

##### `beginDate`<sup>Optional</sup> <a name="beginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.beginDate"></a>

```typescript
public readonly beginDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#begin_date MediaContentKeyPolicy#begin_date}.

---

##### `contentKeyLocationFromHeaderEnabled`<sup>Optional</sup> <a name="contentKeyLocationFromHeaderEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromHeaderEnabled"></a>

```typescript
public readonly contentKeyLocationFromHeaderEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#content_key_location_from_header_enabled MediaContentKeyPolicy#content_key_location_from_header_enabled}.

---

##### `contentKeyLocationFromKeyId`<sup>Optional</sup> <a name="contentKeyLocationFromKeyId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromKeyId"></a>

```typescript
public readonly contentKeyLocationFromKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#content_key_location_from_key_id MediaContentKeyPolicy#content_key_location_from_key_id}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#content_type MediaContentKeyPolicy#content_type}.

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#expiration_date MediaContentKeyPolicy#expiration_date}.

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#grace_period MediaContentKeyPolicy#grace_period}.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#license_type MediaContentKeyPolicy#license_type}.

---

##### `playRight`<sup>Optional</sup> <a name="playRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.playRight"></a>

```typescript
public readonly playRight: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

play_right block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#play_right MediaContentKeyPolicy#play_right}

---

##### `relativeBeginDate`<sup>Optional</sup> <a name="relativeBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeBeginDate"></a>

```typescript
public readonly relativeBeginDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#relative_begin_date MediaContentKeyPolicy#relative_begin_date}.

---

##### `relativeExpirationDate`<sup>Optional</sup> <a name="relativeExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeExpirationDate"></a>

```typescript
public readonly relativeExpirationDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#relative_expiration_date MediaContentKeyPolicy#relative_expiration_date}.

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#security_level MediaContentKeyPolicy#security_level}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight: mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.agcAndColorStripeRestriction">agcAndColorStripeRestriction</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.allowPassingVideoContentToUnknownOutput">allowPassingVideoContentToUnknownOutput</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.analogVideoOpl">analogVideoOpl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#analog_video_opl MediaContentKeyPolicy#analog_video_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalAudioOpl">compressedDigitalAudioOpl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalVideoOpl">compressedDigitalVideoOpl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#compressed_digital_video_opl MediaContentKeyPolicy#compressed_digital_video_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.digitalVideoOnlyContentRestriction">digitalVideoOnlyContentRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.explicitAnalogTelevisionOutputRestriction">explicitAnalogTelevisionOutputRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | explicit_analog_television_output_restriction block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.firstPlayExpiration">firstPlayExpiration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#first_play_expiration MediaContentKeyPolicy#first_play_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComponentVideoRestriction">imageConstraintForAnalogComponentVideoRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComputerMonitorRestriction">imageConstraintForAnalogComputerMonitorRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.scmsRestriction">scmsRestriction</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#scms_restriction MediaContentKeyPolicy#scms_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalAudioOpl">uncompressedDigitalAudioOpl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalVideoOpl">uncompressedDigitalVideoOpl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}. |

---

##### `agcAndColorStripeRestriction`<sup>Optional</sup> <a name="agcAndColorStripeRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.agcAndColorStripeRestriction"></a>

```typescript
public readonly agcAndColorStripeRestriction: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}.

---

##### `allowPassingVideoContentToUnknownOutput`<sup>Optional</sup> <a name="allowPassingVideoContentToUnknownOutput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.allowPassingVideoContentToUnknownOutput"></a>

```typescript
public readonly allowPassingVideoContentToUnknownOutput: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}.

---

##### `analogVideoOpl`<sup>Optional</sup> <a name="analogVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.analogVideoOpl"></a>

```typescript
public readonly analogVideoOpl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#analog_video_opl MediaContentKeyPolicy#analog_video_opl}.

---

##### `compressedDigitalAudioOpl`<sup>Optional</sup> <a name="compressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalAudioOpl"></a>

```typescript
public readonly compressedDigitalAudioOpl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}.

---

##### `compressedDigitalVideoOpl`<sup>Optional</sup> <a name="compressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalVideoOpl"></a>

```typescript
public readonly compressedDigitalVideoOpl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#compressed_digital_video_opl MediaContentKeyPolicy#compressed_digital_video_opl}.

---

##### `digitalVideoOnlyContentRestriction`<sup>Optional</sup> <a name="digitalVideoOnlyContentRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.digitalVideoOnlyContentRestriction"></a>

```typescript
public readonly digitalVideoOnlyContentRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}.

---

##### `explicitAnalogTelevisionOutputRestriction`<sup>Optional</sup> <a name="explicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.explicitAnalogTelevisionOutputRestriction"></a>

```typescript
public readonly explicitAnalogTelevisionOutputRestriction: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

explicit_analog_television_output_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#explicit_analog_television_output_restriction MediaContentKeyPolicy#explicit_analog_television_output_restriction}

---

##### `firstPlayExpiration`<sup>Optional</sup> <a name="firstPlayExpiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.firstPlayExpiration"></a>

```typescript
public readonly firstPlayExpiration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#first_play_expiration MediaContentKeyPolicy#first_play_expiration}.

---

##### `imageConstraintForAnalogComponentVideoRestriction`<sup>Optional</sup> <a name="imageConstraintForAnalogComponentVideoRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComponentVideoRestriction"></a>

```typescript
public readonly imageConstraintForAnalogComponentVideoRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}.

---

##### `imageConstraintForAnalogComputerMonitorRestriction`<sup>Optional</sup> <a name="imageConstraintForAnalogComputerMonitorRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComputerMonitorRestriction"></a>

```typescript
public readonly imageConstraintForAnalogComputerMonitorRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}.

---

##### `scmsRestriction`<sup>Optional</sup> <a name="scmsRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.scmsRestriction"></a>

```typescript
public readonly scmsRestriction: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#scms_restriction MediaContentKeyPolicy#scms_restriction}.

---

##### `uncompressedDigitalAudioOpl`<sup>Optional</sup> <a name="uncompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalAudioOpl"></a>

```typescript
public readonly uncompressedDigitalAudioOpl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}.

---

##### `uncompressedDigitalVideoOpl`<sup>Optional</sup> <a name="uncompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalVideoOpl"></a>

```typescript
public readonly uncompressedDigitalVideoOpl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction: mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.controlBits">controlBits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#control_bits MediaContentKeyPolicy#control_bits}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.bestEffortEnforced">bestEffortEnforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#best_effort_enforced MediaContentKeyPolicy#best_effort_enforced}. |

---

##### `controlBits`<sup>Required</sup> <a name="controlBits" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.controlBits"></a>

```typescript
public readonly controlBits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#control_bits MediaContentKeyPolicy#control_bits}.

---

##### `bestEffortEnforced`<sup>Optional</sup> <a name="bestEffortEnforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.bestEffortEnforced"></a>

```typescript
public readonly bestEffortEnforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#best_effort_enforced MediaContentKeyPolicy#best_effort_enforced}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestriction <a name="MediaContentKeyPolicyPolicyOptionTokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyPolicyOptionTokenRestriction: mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.alternateKey">alternateKey</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>[]</code> | alternate_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.audience">audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#audience MediaContentKeyPolicy#audience}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#issuer MediaContentKeyPolicy#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.openIdConnectDiscoveryDocument">openIdConnectDiscoveryDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyExponent">primaryRsaTokenKeyExponent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyModulus">primaryRsaTokenKeyModulus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primarySymmetricTokenKey">primarySymmetricTokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryX509TokenKeyRaw">primaryX509TokenKeyRaw</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.requiredClaim">requiredClaim</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>[]</code> | required_claim block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.tokenType">tokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#token_type MediaContentKeyPolicy#token_type}. |

---

##### `alternateKey`<sup>Optional</sup> <a name="alternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.alternateKey"></a>

```typescript
public readonly alternateKey: IResolvable | MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>[]

alternate_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#alternate_key MediaContentKeyPolicy#alternate_key}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#audience MediaContentKeyPolicy#audience}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#issuer MediaContentKeyPolicy#issuer}.

---

##### `openIdConnectDiscoveryDocument`<sup>Optional</sup> <a name="openIdConnectDiscoveryDocument" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.openIdConnectDiscoveryDocument"></a>

```typescript
public readonly openIdConnectDiscoveryDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}.

---

##### `primaryRsaTokenKeyExponent`<sup>Optional</sup> <a name="primaryRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyExponent"></a>

```typescript
public readonly primaryRsaTokenKeyExponent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}.

---

##### `primaryRsaTokenKeyModulus`<sup>Optional</sup> <a name="primaryRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyModulus"></a>

```typescript
public readonly primaryRsaTokenKeyModulus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}.

---

##### `primarySymmetricTokenKey`<sup>Optional</sup> <a name="primarySymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primarySymmetricTokenKey"></a>

```typescript
public readonly primarySymmetricTokenKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}.

---

##### `primaryX509TokenKeyRaw`<sup>Optional</sup> <a name="primaryX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryX509TokenKeyRaw"></a>

```typescript
public readonly primaryX509TokenKeyRaw: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}.

---

##### `requiredClaim`<sup>Optional</sup> <a name="requiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.requiredClaim"></a>

```typescript
public readonly requiredClaim: IResolvable | MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>[]

required_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#required_claim MediaContentKeyPolicy#required_claim}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#token_type MediaContentKeyPolicy#token_type}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey: mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyExponent">rsaTokenKeyExponent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#rsa_token_key_exponent MediaContentKeyPolicy#rsa_token_key_exponent}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyModulus">rsaTokenKeyModulus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#rsa_token_key_modulus MediaContentKeyPolicy#rsa_token_key_modulus}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.symmetricTokenKey">symmetricTokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#symmetric_token_key MediaContentKeyPolicy#symmetric_token_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.x509TokenKeyRaw">x509TokenKeyRaw</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#x509_token_key_raw MediaContentKeyPolicy#x509_token_key_raw}. |

---

##### `rsaTokenKeyExponent`<sup>Optional</sup> <a name="rsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyExponent"></a>

```typescript
public readonly rsaTokenKeyExponent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#rsa_token_key_exponent MediaContentKeyPolicy#rsa_token_key_exponent}.

---

##### `rsaTokenKeyModulus`<sup>Optional</sup> <a name="rsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyModulus"></a>

```typescript
public readonly rsaTokenKeyModulus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#rsa_token_key_modulus MediaContentKeyPolicy#rsa_token_key_modulus}.

---

##### `symmetricTokenKey`<sup>Optional</sup> <a name="symmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.symmetricTokenKey"></a>

```typescript
public readonly symmetricTokenKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#symmetric_token_key MediaContentKeyPolicy#symmetric_token_key}.

---

##### `x509TokenKeyRaw`<sup>Optional</sup> <a name="x509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.x509TokenKeyRaw"></a>

```typescript
public readonly x509TokenKeyRaw: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#x509_token_key_raw MediaContentKeyPolicy#x509_token_key_raw}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim: mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#type MediaContentKeyPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#value MediaContentKeyPolicy#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#type MediaContentKeyPolicy#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#value MediaContentKeyPolicy#value}.

---

### MediaContentKeyPolicyTimeouts <a name="MediaContentKeyPolicyTimeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

const mediaContentKeyPolicyTimeouts: mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#create MediaContentKeyPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#delete MediaContentKeyPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#read MediaContentKeyPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#update MediaContentKeyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#create MediaContentKeyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#delete MediaContentKeyPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#read MediaContentKeyPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/media_content_key_policy#update MediaContentKeyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetPlaybackDurationSeconds">resetPlaybackDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetStorageDurationSeconds">resetStorageDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaybackDurationSeconds` <a name="resetPlaybackDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetPlaybackDurationSeconds"></a>

```typescript
public resetPlaybackDurationSeconds(): void
```

##### `resetStorageDurationSeconds` <a name="resetStorageDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetStorageDurationSeconds"></a>

```typescript
public resetStorageDurationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSecondsInput">playbackDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSecondsInput">storageDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSeconds">playbackDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSeconds">storageDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `playbackDurationSecondsInput`<sup>Optional</sup> <a name="playbackDurationSecondsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSecondsInput"></a>

```typescript
public readonly playbackDurationSecondsInput: number;
```

- *Type:* number

---

##### `storageDurationSecondsInput`<sup>Optional</sup> <a name="storageDurationSecondsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSecondsInput"></a>

```typescript
public readonly storageDurationSecondsInput: number;
```

- *Type:* number

---

##### `playbackDurationSeconds`<sup>Required</sup> <a name="playbackDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSeconds"></a>

```typescript
public readonly playbackDurationSeconds: number;
```

- *Type:* number

---

##### `storageDurationSeconds`<sup>Required</sup> <a name="storageDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSeconds"></a>

```typescript
public readonly storageDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---


### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration">putOfflineRentalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetAsk">resetAsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetOfflineRentalConfiguration">resetOfflineRentalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfx">resetPfx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfxPassword">resetPfxPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalAndLeaseKeyType">resetRentalAndLeaseKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalDurationSeconds">resetRentalDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOfflineRentalConfiguration` <a name="putOfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration"></a>

```typescript
public putOfflineRentalConfiguration(value: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---

##### `resetAsk` <a name="resetAsk" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetAsk"></a>

```typescript
public resetAsk(): void
```

##### `resetOfflineRentalConfiguration` <a name="resetOfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetOfflineRentalConfiguration"></a>

```typescript
public resetOfflineRentalConfiguration(): void
```

##### `resetPfx` <a name="resetPfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfx"></a>

```typescript
public resetPfx(): void
```

##### `resetPfxPassword` <a name="resetPfxPassword" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfxPassword"></a>

```typescript
public resetPfxPassword(): void
```

##### `resetRentalAndLeaseKeyType` <a name="resetRentalAndLeaseKeyType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalAndLeaseKeyType"></a>

```typescript
public resetRentalAndLeaseKeyType(): void
```

##### `resetRentalDurationSeconds` <a name="resetRentalDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalDurationSeconds"></a>

```typescript
public resetRentalDurationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfiguration">offlineRentalConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.askInput">askInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfigurationInput">offlineRentalConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxInput">pfxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPasswordInput">pfxPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyTypeInput">rentalAndLeaseKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSecondsInput">rentalDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.ask">ask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfx">pfx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPassword">pfxPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyType">rentalAndLeaseKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSeconds">rentalDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offlineRentalConfiguration`<sup>Required</sup> <a name="offlineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfiguration"></a>

```typescript
public readonly offlineRentalConfiguration: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference</a>

---

##### `askInput`<sup>Optional</sup> <a name="askInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.askInput"></a>

```typescript
public readonly askInput: string;
```

- *Type:* string

---

##### `offlineRentalConfigurationInput`<sup>Optional</sup> <a name="offlineRentalConfigurationInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfigurationInput"></a>

```typescript
public readonly offlineRentalConfigurationInput: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---

##### `pfxInput`<sup>Optional</sup> <a name="pfxInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxInput"></a>

```typescript
public readonly pfxInput: string;
```

- *Type:* string

---

##### `pfxPasswordInput`<sup>Optional</sup> <a name="pfxPasswordInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPasswordInput"></a>

```typescript
public readonly pfxPasswordInput: string;
```

- *Type:* string

---

##### `rentalAndLeaseKeyTypeInput`<sup>Optional</sup> <a name="rentalAndLeaseKeyTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyTypeInput"></a>

```typescript
public readonly rentalAndLeaseKeyTypeInput: string;
```

- *Type:* string

---

##### `rentalDurationSecondsInput`<sup>Optional</sup> <a name="rentalDurationSecondsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSecondsInput"></a>

```typescript
public readonly rentalDurationSecondsInput: number;
```

- *Type:* number

---

##### `ask`<sup>Required</sup> <a name="ask" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.ask"></a>

```typescript
public readonly ask: string;
```

- *Type:* string

---

##### `pfx`<sup>Required</sup> <a name="pfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfx"></a>

```typescript
public readonly pfx: string;
```

- *Type:* string

---

##### `pfxPassword`<sup>Required</sup> <a name="pfxPassword" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPassword"></a>

```typescript
public readonly pfxPassword: string;
```

- *Type:* string

---

##### `rentalAndLeaseKeyType`<sup>Required</sup> <a name="rentalAndLeaseKeyType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyType"></a>

```typescript
public readonly rentalAndLeaseKeyType: string;
```

- *Type:* string

---

##### `rentalDurationSeconds`<sup>Required</sup> <a name="rentalDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSeconds"></a>

```typescript
public readonly rentalDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaContentKeyPolicyPolicyOptionFairplayConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---


### MediaContentKeyPolicyPolicyOptionList <a name="MediaContentKeyPolicyPolicyOptionList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get"></a>

```typescript
public get(index: number): MediaContentKeyPolicyPolicyOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaContentKeyPolicyPolicyOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>[]

---


### MediaContentKeyPolicyPolicyOptionOutputReference <a name="MediaContentKeyPolicyPolicyOptionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration">putFairplayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense">putPlayreadyConfigurationLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction">putTokenRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetClearKeyConfigurationEnabled">resetClearKeyConfigurationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetFairplayConfiguration">resetFairplayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetOpenRestrictionEnabled">resetOpenRestrictionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyConfigurationLicense">resetPlayreadyConfigurationLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyResponseCustomData">resetPlayreadyResponseCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetTokenRestriction">resetTokenRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetWidevineConfigurationTemplate">resetWidevineConfigurationTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFairplayConfiguration` <a name="putFairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration"></a>

```typescript
public putFairplayConfiguration(value: MediaContentKeyPolicyPolicyOptionFairplayConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---

##### `putPlayreadyConfigurationLicense` <a name="putPlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense"></a>

```typescript
public putPlayreadyConfigurationLicense(value: IResolvable | MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>[]

---

##### `putTokenRestriction` <a name="putTokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction"></a>

```typescript
public putTokenRestriction(value: MediaContentKeyPolicyPolicyOptionTokenRestriction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---

##### `resetClearKeyConfigurationEnabled` <a name="resetClearKeyConfigurationEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetClearKeyConfigurationEnabled"></a>

```typescript
public resetClearKeyConfigurationEnabled(): void
```

##### `resetFairplayConfiguration` <a name="resetFairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetFairplayConfiguration"></a>

```typescript
public resetFairplayConfiguration(): void
```

##### `resetOpenRestrictionEnabled` <a name="resetOpenRestrictionEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetOpenRestrictionEnabled"></a>

```typescript
public resetOpenRestrictionEnabled(): void
```

##### `resetPlayreadyConfigurationLicense` <a name="resetPlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyConfigurationLicense"></a>

```typescript
public resetPlayreadyConfigurationLicense(): void
```

##### `resetPlayreadyResponseCustomData` <a name="resetPlayreadyResponseCustomData" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyResponseCustomData"></a>

```typescript
public resetPlayreadyResponseCustomData(): void
```

##### `resetTokenRestriction` <a name="resetTokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetTokenRestriction"></a>

```typescript
public resetTokenRestriction(): void
```

##### `resetWidevineConfigurationTemplate` <a name="resetWidevineConfigurationTemplate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetWidevineConfigurationTemplate"></a>

```typescript
public resetWidevineConfigurationTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfiguration">fairplayConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicense">playreadyConfigurationLicense</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestriction">tokenRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabledInput">clearKeyConfigurationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfigurationInput">fairplayConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabledInput">openRestrictionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicenseInput">playreadyConfigurationLicenseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomDataInput">playreadyResponseCustomDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestrictionInput">tokenRestrictionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplateInput">widevineConfigurationTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabled">clearKeyConfigurationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabled">openRestrictionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomData">playreadyResponseCustomData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplate">widevineConfigurationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fairplayConfiguration`<sup>Required</sup> <a name="fairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfiguration"></a>

```typescript
public readonly fairplayConfiguration: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference</a>

---

##### `playreadyConfigurationLicense`<sup>Required</sup> <a name="playreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicense"></a>

```typescript
public readonly playreadyConfigurationLicense: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList</a>

---

##### `tokenRestriction`<sup>Required</sup> <a name="tokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestriction"></a>

```typescript
public readonly tokenRestriction: MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference</a>

---

##### `clearKeyConfigurationEnabledInput`<sup>Optional</sup> <a name="clearKeyConfigurationEnabledInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabledInput"></a>

```typescript
public readonly clearKeyConfigurationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fairplayConfigurationInput`<sup>Optional</sup> <a name="fairplayConfigurationInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfigurationInput"></a>

```typescript
public readonly fairplayConfigurationInput: MediaContentKeyPolicyPolicyOptionFairplayConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `openRestrictionEnabledInput`<sup>Optional</sup> <a name="openRestrictionEnabledInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabledInput"></a>

```typescript
public readonly openRestrictionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `playreadyConfigurationLicenseInput`<sup>Optional</sup> <a name="playreadyConfigurationLicenseInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicenseInput"></a>

```typescript
public readonly playreadyConfigurationLicenseInput: IResolvable | MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>[]

---

##### `playreadyResponseCustomDataInput`<sup>Optional</sup> <a name="playreadyResponseCustomDataInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomDataInput"></a>

```typescript
public readonly playreadyResponseCustomDataInput: string;
```

- *Type:* string

---

##### `tokenRestrictionInput`<sup>Optional</sup> <a name="tokenRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestrictionInput"></a>

```typescript
public readonly tokenRestrictionInput: MediaContentKeyPolicyPolicyOptionTokenRestriction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---

##### `widevineConfigurationTemplateInput`<sup>Optional</sup> <a name="widevineConfigurationTemplateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplateInput"></a>

```typescript
public readonly widevineConfigurationTemplateInput: string;
```

- *Type:* string

---

##### `clearKeyConfigurationEnabled`<sup>Required</sup> <a name="clearKeyConfigurationEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabled"></a>

```typescript
public readonly clearKeyConfigurationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `openRestrictionEnabled`<sup>Required</sup> <a name="openRestrictionEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabled"></a>

```typescript
public readonly openRestrictionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `playreadyResponseCustomData`<sup>Required</sup> <a name="playreadyResponseCustomData" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomData"></a>

```typescript
public readonly playreadyResponseCustomData: string;
```

- *Type:* string

---

##### `widevineConfigurationTemplate`<sup>Required</sup> <a name="widevineConfigurationTemplate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplate"></a>

```typescript
public readonly widevineConfigurationTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaContentKeyPolicyPolicyOption;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get"></a>

```typescript
public get(index: number): MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>[]

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight">putPlayRight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetAllowTestDevices">resetAllowTestDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetBeginDate">resetBeginDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromHeaderEnabled">resetContentKeyLocationFromHeaderEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromKeyId">resetContentKeyLocationFromKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetPlayRight">resetPlayRight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeBeginDate">resetRelativeBeginDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeExpirationDate">resetRelativeExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPlayRight` <a name="putPlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight"></a>

```typescript
public putPlayRight(value: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---

##### `resetAllowTestDevices` <a name="resetAllowTestDevices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetAllowTestDevices"></a>

```typescript
public resetAllowTestDevices(): void
```

##### `resetBeginDate` <a name="resetBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetBeginDate"></a>

```typescript
public resetBeginDate(): void
```

##### `resetContentKeyLocationFromHeaderEnabled` <a name="resetContentKeyLocationFromHeaderEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromHeaderEnabled"></a>

```typescript
public resetContentKeyLocationFromHeaderEnabled(): void
```

##### `resetContentKeyLocationFromKeyId` <a name="resetContentKeyLocationFromKeyId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromKeyId"></a>

```typescript
public resetContentKeyLocationFromKeyId(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetExpirationDate"></a>

```typescript
public resetExpirationDate(): void
```

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetGracePeriod"></a>

```typescript
public resetGracePeriod(): void
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetLicenseType"></a>

```typescript
public resetLicenseType(): void
```

##### `resetPlayRight` <a name="resetPlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetPlayRight"></a>

```typescript
public resetPlayRight(): void
```

##### `resetRelativeBeginDate` <a name="resetRelativeBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeBeginDate"></a>

```typescript
public resetRelativeBeginDate(): void
```

##### `resetRelativeExpirationDate` <a name="resetRelativeExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeExpirationDate"></a>

```typescript
public resetRelativeExpirationDate(): void
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetSecurityLevel"></a>

```typescript
public resetSecurityLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRight">playRight</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevicesInput">allowTestDevicesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDateInput">beginDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabledInput">contentKeyLocationFromHeaderEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyIdInput">contentKeyLocationFromKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDateInput">expirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRightInput">playRightInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDateInput">relativeBeginDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDateInput">relativeExpirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevices">allowTestDevices</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDate">beginDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabled">contentKeyLocationFromHeaderEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyId">contentKeyLocationFromKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDate">relativeBeginDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDate">relativeExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `playRight`<sup>Required</sup> <a name="playRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRight"></a>

```typescript
public readonly playRight: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference</a>

---

##### `allowTestDevicesInput`<sup>Optional</sup> <a name="allowTestDevicesInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevicesInput"></a>

```typescript
public readonly allowTestDevicesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `beginDateInput`<sup>Optional</sup> <a name="beginDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDateInput"></a>

```typescript
public readonly beginDateInput: string;
```

- *Type:* string

---

##### `contentKeyLocationFromHeaderEnabledInput`<sup>Optional</sup> <a name="contentKeyLocationFromHeaderEnabledInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabledInput"></a>

```typescript
public readonly contentKeyLocationFromHeaderEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contentKeyLocationFromKeyIdInput`<sup>Optional</sup> <a name="contentKeyLocationFromKeyIdInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyIdInput"></a>

```typescript
public readonly contentKeyLocationFromKeyIdInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDateInput"></a>

```typescript
public readonly expirationDateInput: string;
```

- *Type:* string

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriodInput"></a>

```typescript
public readonly gracePeriodInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `playRightInput`<sup>Optional</sup> <a name="playRightInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRightInput"></a>

```typescript
public readonly playRightInput: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---

##### `relativeBeginDateInput`<sup>Optional</sup> <a name="relativeBeginDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDateInput"></a>

```typescript
public readonly relativeBeginDateInput: string;
```

- *Type:* string

---

##### `relativeExpirationDateInput`<sup>Optional</sup> <a name="relativeExpirationDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDateInput"></a>

```typescript
public readonly relativeExpirationDateInput: string;
```

- *Type:* string

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `allowTestDevices`<sup>Required</sup> <a name="allowTestDevices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevices"></a>

```typescript
public readonly allowTestDevices: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `beginDate`<sup>Required</sup> <a name="beginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDate"></a>

```typescript
public readonly beginDate: string;
```

- *Type:* string

---

##### `contentKeyLocationFromHeaderEnabled`<sup>Required</sup> <a name="contentKeyLocationFromHeaderEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabled"></a>

```typescript
public readonly contentKeyLocationFromHeaderEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contentKeyLocationFromKeyId`<sup>Required</sup> <a name="contentKeyLocationFromKeyId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyId"></a>

```typescript
public readonly contentKeyLocationFromKeyId: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `relativeBeginDate`<sup>Required</sup> <a name="relativeBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDate"></a>

```typescript
public readonly relativeBeginDate: string;
```

- *Type:* string

---

##### `relativeExpirationDate`<sup>Required</sup> <a name="relativeExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDate"></a>

```typescript
public readonly relativeExpirationDate: string;
```

- *Type:* string

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resetBestEffortEnforced">resetBestEffortEnforced</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBestEffortEnforced` <a name="resetBestEffortEnforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resetBestEffortEnforced"></a>

```typescript
public resetBestEffortEnforced(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforcedInput">bestEffortEnforcedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBitsInput">controlBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforced">bestEffortEnforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBits">controlBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bestEffortEnforcedInput`<sup>Optional</sup> <a name="bestEffortEnforcedInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforcedInput"></a>

```typescript
public readonly bestEffortEnforcedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `controlBitsInput`<sup>Optional</sup> <a name="controlBitsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBitsInput"></a>

```typescript
public readonly controlBitsInput: number;
```

- *Type:* number

---

##### `bestEffortEnforced`<sup>Required</sup> <a name="bestEffortEnforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforced"></a>

```typescript
public readonly bestEffortEnforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `controlBits`<sup>Required</sup> <a name="controlBits" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBits"></a>

```typescript
public readonly controlBits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction">putExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAgcAndColorStripeRestriction">resetAgcAndColorStripeRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAllowPassingVideoContentToUnknownOutput">resetAllowPassingVideoContentToUnknownOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAnalogVideoOpl">resetAnalogVideoOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalAudioOpl">resetCompressedDigitalAudioOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalVideoOpl">resetCompressedDigitalVideoOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetDigitalVideoOnlyContentRestriction">resetDigitalVideoOnlyContentRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetExplicitAnalogTelevisionOutputRestriction">resetExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetFirstPlayExpiration">resetFirstPlayExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComponentVideoRestriction">resetImageConstraintForAnalogComponentVideoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComputerMonitorRestriction">resetImageConstraintForAnalogComputerMonitorRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetScmsRestriction">resetScmsRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalAudioOpl">resetUncompressedDigitalAudioOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalVideoOpl">resetUncompressedDigitalVideoOpl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExplicitAnalogTelevisionOutputRestriction` <a name="putExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction"></a>

```typescript
public putExplicitAnalogTelevisionOutputRestriction(value: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---

##### `resetAgcAndColorStripeRestriction` <a name="resetAgcAndColorStripeRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAgcAndColorStripeRestriction"></a>

```typescript
public resetAgcAndColorStripeRestriction(): void
```

##### `resetAllowPassingVideoContentToUnknownOutput` <a name="resetAllowPassingVideoContentToUnknownOutput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAllowPassingVideoContentToUnknownOutput"></a>

```typescript
public resetAllowPassingVideoContentToUnknownOutput(): void
```

##### `resetAnalogVideoOpl` <a name="resetAnalogVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAnalogVideoOpl"></a>

```typescript
public resetAnalogVideoOpl(): void
```

##### `resetCompressedDigitalAudioOpl` <a name="resetCompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalAudioOpl"></a>

```typescript
public resetCompressedDigitalAudioOpl(): void
```

##### `resetCompressedDigitalVideoOpl` <a name="resetCompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalVideoOpl"></a>

```typescript
public resetCompressedDigitalVideoOpl(): void
```

##### `resetDigitalVideoOnlyContentRestriction` <a name="resetDigitalVideoOnlyContentRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetDigitalVideoOnlyContentRestriction"></a>

```typescript
public resetDigitalVideoOnlyContentRestriction(): void
```

##### `resetExplicitAnalogTelevisionOutputRestriction` <a name="resetExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetExplicitAnalogTelevisionOutputRestriction"></a>

```typescript
public resetExplicitAnalogTelevisionOutputRestriction(): void
```

##### `resetFirstPlayExpiration` <a name="resetFirstPlayExpiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetFirstPlayExpiration"></a>

```typescript
public resetFirstPlayExpiration(): void
```

##### `resetImageConstraintForAnalogComponentVideoRestriction` <a name="resetImageConstraintForAnalogComponentVideoRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComponentVideoRestriction"></a>

```typescript
public resetImageConstraintForAnalogComponentVideoRestriction(): void
```

##### `resetImageConstraintForAnalogComputerMonitorRestriction` <a name="resetImageConstraintForAnalogComputerMonitorRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComputerMonitorRestriction"></a>

```typescript
public resetImageConstraintForAnalogComputerMonitorRestriction(): void
```

##### `resetScmsRestriction` <a name="resetScmsRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetScmsRestriction"></a>

```typescript
public resetScmsRestriction(): void
```

##### `resetUncompressedDigitalAudioOpl` <a name="resetUncompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalAudioOpl"></a>

```typescript
public resetUncompressedDigitalAudioOpl(): void
```

##### `resetUncompressedDigitalVideoOpl` <a name="resetUncompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalVideoOpl"></a>

```typescript
public resetUncompressedDigitalVideoOpl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestriction">explicitAnalogTelevisionOutputRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestrictionInput">agcAndColorStripeRestrictionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutputInput">allowPassingVideoContentToUnknownOutputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOplInput">analogVideoOplInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOplInput">compressedDigitalAudioOplInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOplInput">compressedDigitalVideoOplInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestrictionInput">digitalVideoOnlyContentRestrictionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestrictionInput">explicitAnalogTelevisionOutputRestrictionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpirationInput">firstPlayExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestrictionInput">imageConstraintForAnalogComponentVideoRestrictionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestrictionInput">imageConstraintForAnalogComputerMonitorRestrictionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestrictionInput">scmsRestrictionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOplInput">uncompressedDigitalAudioOplInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOplInput">uncompressedDigitalVideoOplInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestriction">agcAndColorStripeRestriction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutput">allowPassingVideoContentToUnknownOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOpl">analogVideoOpl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOpl">compressedDigitalAudioOpl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOpl">compressedDigitalVideoOpl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestriction">digitalVideoOnlyContentRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpiration">firstPlayExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestriction">imageConstraintForAnalogComponentVideoRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestriction">imageConstraintForAnalogComputerMonitorRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestriction">scmsRestriction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOpl">uncompressedDigitalAudioOpl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOpl">uncompressedDigitalVideoOpl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `explicitAnalogTelevisionOutputRestriction`<sup>Required</sup> <a name="explicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestriction"></a>

```typescript
public readonly explicitAnalogTelevisionOutputRestriction: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference</a>

---

##### `agcAndColorStripeRestrictionInput`<sup>Optional</sup> <a name="agcAndColorStripeRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestrictionInput"></a>

```typescript
public readonly agcAndColorStripeRestrictionInput: number;
```

- *Type:* number

---

##### `allowPassingVideoContentToUnknownOutputInput`<sup>Optional</sup> <a name="allowPassingVideoContentToUnknownOutputInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutputInput"></a>

```typescript
public readonly allowPassingVideoContentToUnknownOutputInput: string;
```

- *Type:* string

---

##### `analogVideoOplInput`<sup>Optional</sup> <a name="analogVideoOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOplInput"></a>

```typescript
public readonly analogVideoOplInput: number;
```

- *Type:* number

---

##### `compressedDigitalAudioOplInput`<sup>Optional</sup> <a name="compressedDigitalAudioOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOplInput"></a>

```typescript
public readonly compressedDigitalAudioOplInput: number;
```

- *Type:* number

---

##### `compressedDigitalVideoOplInput`<sup>Optional</sup> <a name="compressedDigitalVideoOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOplInput"></a>

```typescript
public readonly compressedDigitalVideoOplInput: number;
```

- *Type:* number

---

##### `digitalVideoOnlyContentRestrictionInput`<sup>Optional</sup> <a name="digitalVideoOnlyContentRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestrictionInput"></a>

```typescript
public readonly digitalVideoOnlyContentRestrictionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `explicitAnalogTelevisionOutputRestrictionInput`<sup>Optional</sup> <a name="explicitAnalogTelevisionOutputRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestrictionInput"></a>

```typescript
public readonly explicitAnalogTelevisionOutputRestrictionInput: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---

##### `firstPlayExpirationInput`<sup>Optional</sup> <a name="firstPlayExpirationInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpirationInput"></a>

```typescript
public readonly firstPlayExpirationInput: string;
```

- *Type:* string

---

##### `imageConstraintForAnalogComponentVideoRestrictionInput`<sup>Optional</sup> <a name="imageConstraintForAnalogComponentVideoRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestrictionInput"></a>

```typescript
public readonly imageConstraintForAnalogComponentVideoRestrictionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imageConstraintForAnalogComputerMonitorRestrictionInput`<sup>Optional</sup> <a name="imageConstraintForAnalogComputerMonitorRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestrictionInput"></a>

```typescript
public readonly imageConstraintForAnalogComputerMonitorRestrictionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scmsRestrictionInput`<sup>Optional</sup> <a name="scmsRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestrictionInput"></a>

```typescript
public readonly scmsRestrictionInput: number;
```

- *Type:* number

---

##### `uncompressedDigitalAudioOplInput`<sup>Optional</sup> <a name="uncompressedDigitalAudioOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOplInput"></a>

```typescript
public readonly uncompressedDigitalAudioOplInput: number;
```

- *Type:* number

---

##### `uncompressedDigitalVideoOplInput`<sup>Optional</sup> <a name="uncompressedDigitalVideoOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOplInput"></a>

```typescript
public readonly uncompressedDigitalVideoOplInput: number;
```

- *Type:* number

---

##### `agcAndColorStripeRestriction`<sup>Required</sup> <a name="agcAndColorStripeRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestriction"></a>

```typescript
public readonly agcAndColorStripeRestriction: number;
```

- *Type:* number

---

##### `allowPassingVideoContentToUnknownOutput`<sup>Required</sup> <a name="allowPassingVideoContentToUnknownOutput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutput"></a>

```typescript
public readonly allowPassingVideoContentToUnknownOutput: string;
```

- *Type:* string

---

##### `analogVideoOpl`<sup>Required</sup> <a name="analogVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOpl"></a>

```typescript
public readonly analogVideoOpl: number;
```

- *Type:* number

---

##### `compressedDigitalAudioOpl`<sup>Required</sup> <a name="compressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOpl"></a>

```typescript
public readonly compressedDigitalAudioOpl: number;
```

- *Type:* number

---

##### `compressedDigitalVideoOpl`<sup>Required</sup> <a name="compressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOpl"></a>

```typescript
public readonly compressedDigitalVideoOpl: number;
```

- *Type:* number

---

##### `digitalVideoOnlyContentRestriction`<sup>Required</sup> <a name="digitalVideoOnlyContentRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestriction"></a>

```typescript
public readonly digitalVideoOnlyContentRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firstPlayExpiration`<sup>Required</sup> <a name="firstPlayExpiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpiration"></a>

```typescript
public readonly firstPlayExpiration: string;
```

- *Type:* string

---

##### `imageConstraintForAnalogComponentVideoRestriction`<sup>Required</sup> <a name="imageConstraintForAnalogComponentVideoRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestriction"></a>

```typescript
public readonly imageConstraintForAnalogComponentVideoRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imageConstraintForAnalogComputerMonitorRestriction`<sup>Required</sup> <a name="imageConstraintForAnalogComputerMonitorRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestriction"></a>

```typescript
public readonly imageConstraintForAnalogComputerMonitorRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scmsRestriction`<sup>Required</sup> <a name="scmsRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestriction"></a>

```typescript
public readonly scmsRestriction: number;
```

- *Type:* number

---

##### `uncompressedDigitalAudioOpl`<sup>Required</sup> <a name="uncompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOpl"></a>

```typescript
public readonly uncompressedDigitalAudioOpl: number;
```

- *Type:* number

---

##### `uncompressedDigitalVideoOpl`<sup>Required</sup> <a name="uncompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOpl"></a>

```typescript
public readonly uncompressedDigitalVideoOpl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get"></a>

```typescript
public get(index: number): MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>[]

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyExponent">resetRsaTokenKeyExponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyModulus">resetRsaTokenKeyModulus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetSymmetricTokenKey">resetSymmetricTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetX509TokenKeyRaw">resetX509TokenKeyRaw</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRsaTokenKeyExponent` <a name="resetRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyExponent"></a>

```typescript
public resetRsaTokenKeyExponent(): void
```

##### `resetRsaTokenKeyModulus` <a name="resetRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyModulus"></a>

```typescript
public resetRsaTokenKeyModulus(): void
```

##### `resetSymmetricTokenKey` <a name="resetSymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetSymmetricTokenKey"></a>

```typescript
public resetSymmetricTokenKey(): void
```

##### `resetX509TokenKeyRaw` <a name="resetX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetX509TokenKeyRaw"></a>

```typescript
public resetX509TokenKeyRaw(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponentInput">rsaTokenKeyExponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulusInput">rsaTokenKeyModulusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKeyInput">symmetricTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRawInput">x509TokenKeyRawInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponent">rsaTokenKeyExponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulus">rsaTokenKeyModulus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKey">symmetricTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRaw">x509TokenKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rsaTokenKeyExponentInput`<sup>Optional</sup> <a name="rsaTokenKeyExponentInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponentInput"></a>

```typescript
public readonly rsaTokenKeyExponentInput: string;
```

- *Type:* string

---

##### `rsaTokenKeyModulusInput`<sup>Optional</sup> <a name="rsaTokenKeyModulusInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulusInput"></a>

```typescript
public readonly rsaTokenKeyModulusInput: string;
```

- *Type:* string

---

##### `symmetricTokenKeyInput`<sup>Optional</sup> <a name="symmetricTokenKeyInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKeyInput"></a>

```typescript
public readonly symmetricTokenKeyInput: string;
```

- *Type:* string

---

##### `x509TokenKeyRawInput`<sup>Optional</sup> <a name="x509TokenKeyRawInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRawInput"></a>

```typescript
public readonly x509TokenKeyRawInput: string;
```

- *Type:* string

---

##### `rsaTokenKeyExponent`<sup>Required</sup> <a name="rsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponent"></a>

```typescript
public readonly rsaTokenKeyExponent: string;
```

- *Type:* string

---

##### `rsaTokenKeyModulus`<sup>Required</sup> <a name="rsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulus"></a>

```typescript
public readonly rsaTokenKeyModulus: string;
```

- *Type:* string

---

##### `symmetricTokenKey`<sup>Required</sup> <a name="symmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKey"></a>

```typescript
public readonly symmetricTokenKey: string;
```

- *Type:* string

---

##### `x509TokenKeyRaw`<sup>Required</sup> <a name="x509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRaw"></a>

```typescript
public readonly x509TokenKeyRaw: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey">putAlternateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim">putRequiredClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAlternateKey">resetAlternateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetOpenIdConnectDiscoveryDocument">resetOpenIdConnectDiscoveryDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyExponent">resetPrimaryRsaTokenKeyExponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyModulus">resetPrimaryRsaTokenKeyModulus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimarySymmetricTokenKey">resetPrimarySymmetricTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryX509TokenKeyRaw">resetPrimaryX509TokenKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetRequiredClaim">resetRequiredClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlternateKey` <a name="putAlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey"></a>

```typescript
public putAlternateKey(value: IResolvable | MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>[]

---

##### `putRequiredClaim` <a name="putRequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim"></a>

```typescript
public putRequiredClaim(value: IResolvable | MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>[]

---

##### `resetAlternateKey` <a name="resetAlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAlternateKey"></a>

```typescript
public resetAlternateKey(): void
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetOpenIdConnectDiscoveryDocument` <a name="resetOpenIdConnectDiscoveryDocument" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetOpenIdConnectDiscoveryDocument"></a>

```typescript
public resetOpenIdConnectDiscoveryDocument(): void
```

##### `resetPrimaryRsaTokenKeyExponent` <a name="resetPrimaryRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyExponent"></a>

```typescript
public resetPrimaryRsaTokenKeyExponent(): void
```

##### `resetPrimaryRsaTokenKeyModulus` <a name="resetPrimaryRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyModulus"></a>

```typescript
public resetPrimaryRsaTokenKeyModulus(): void
```

##### `resetPrimarySymmetricTokenKey` <a name="resetPrimarySymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimarySymmetricTokenKey"></a>

```typescript
public resetPrimarySymmetricTokenKey(): void
```

##### `resetPrimaryX509TokenKeyRaw` <a name="resetPrimaryX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryX509TokenKeyRaw"></a>

```typescript
public resetPrimaryX509TokenKeyRaw(): void
```

##### `resetRequiredClaim` <a name="resetRequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetRequiredClaim"></a>

```typescript
public resetRequiredClaim(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetTokenType"></a>

```typescript
public resetTokenType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKey">alternateKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaim">requiredClaim</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKeyInput">alternateKeyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocumentInput">openIdConnectDiscoveryDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponentInput">primaryRsaTokenKeyExponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulusInput">primaryRsaTokenKeyModulusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKeyInput">primarySymmetricTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRawInput">primaryX509TokenKeyRawInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaimInput">requiredClaimInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocument">openIdConnectDiscoveryDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponent">primaryRsaTokenKeyExponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulus">primaryRsaTokenKeyModulus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKey">primarySymmetricTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRaw">primaryX509TokenKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alternateKey`<sup>Required</sup> <a name="alternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKey"></a>

```typescript
public readonly alternateKey: MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList</a>

---

##### `requiredClaim`<sup>Required</sup> <a name="requiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaim"></a>

```typescript
public readonly requiredClaim: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList</a>

---

##### `alternateKeyInput`<sup>Optional</sup> <a name="alternateKeyInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKeyInput"></a>

```typescript
public readonly alternateKeyInput: IResolvable | MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>[]

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `openIdConnectDiscoveryDocumentInput`<sup>Optional</sup> <a name="openIdConnectDiscoveryDocumentInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocumentInput"></a>

```typescript
public readonly openIdConnectDiscoveryDocumentInput: string;
```

- *Type:* string

---

##### `primaryRsaTokenKeyExponentInput`<sup>Optional</sup> <a name="primaryRsaTokenKeyExponentInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponentInput"></a>

```typescript
public readonly primaryRsaTokenKeyExponentInput: string;
```

- *Type:* string

---

##### `primaryRsaTokenKeyModulusInput`<sup>Optional</sup> <a name="primaryRsaTokenKeyModulusInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulusInput"></a>

```typescript
public readonly primaryRsaTokenKeyModulusInput: string;
```

- *Type:* string

---

##### `primarySymmetricTokenKeyInput`<sup>Optional</sup> <a name="primarySymmetricTokenKeyInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKeyInput"></a>

```typescript
public readonly primarySymmetricTokenKeyInput: string;
```

- *Type:* string

---

##### `primaryX509TokenKeyRawInput`<sup>Optional</sup> <a name="primaryX509TokenKeyRawInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRawInput"></a>

```typescript
public readonly primaryX509TokenKeyRawInput: string;
```

- *Type:* string

---

##### `requiredClaimInput`<sup>Optional</sup> <a name="requiredClaimInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaimInput"></a>

```typescript
public readonly requiredClaimInput: IResolvable | MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>[]

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `openIdConnectDiscoveryDocument`<sup>Required</sup> <a name="openIdConnectDiscoveryDocument" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocument"></a>

```typescript
public readonly openIdConnectDiscoveryDocument: string;
```

- *Type:* string

---

##### `primaryRsaTokenKeyExponent`<sup>Required</sup> <a name="primaryRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponent"></a>

```typescript
public readonly primaryRsaTokenKeyExponent: string;
```

- *Type:* string

---

##### `primaryRsaTokenKeyModulus`<sup>Required</sup> <a name="primaryRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulus"></a>

```typescript
public readonly primaryRsaTokenKeyModulus: string;
```

- *Type:* string

---

##### `primarySymmetricTokenKey`<sup>Required</sup> <a name="primarySymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKey"></a>

```typescript
public readonly primarySymmetricTokenKey: string;
```

- *Type:* string

---

##### `primaryX509TokenKeyRaw`<sup>Required</sup> <a name="primaryX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRaw"></a>

```typescript
public readonly primaryX509TokenKeyRaw: string;
```

- *Type:* string

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaContentKeyPolicyPolicyOptionTokenRestriction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get"></a>

```typescript
public get(index: number): MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>[]

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>

---


### MediaContentKeyPolicyTimeoutsOutputReference <a name="MediaContentKeyPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { mediaContentKeyPolicy } from '@cdktf/provider-azurerm'

new mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaContentKeyPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

---



