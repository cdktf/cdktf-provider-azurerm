# `qumuloFileSystem` Submodule <a name="`qumuloFileSystem` Submodule" id="@cdktf/provider-azurerm.qumuloFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QumuloFileSystem <a name="QumuloFileSystem" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system azurerm_qumulo_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer"></a>

```typescript
import { qumuloFileSystem } from '@cdktf/provider-azurerm'

new qumuloFileSystem.QumuloFileSystem(scope: Construct, id: string, config: QumuloFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig">QumuloFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig">QumuloFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOfferId">resetOfferId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPlanId">resetPlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPublisherId">resetPublisherId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts"></a>

```typescript
public putTimeouts(value: QumuloFileSystemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOfferId` <a name="resetOfferId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOfferId"></a>

```typescript
public resetOfferId(): void
```

##### `resetPlanId` <a name="resetPlanId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPlanId"></a>

```typescript
public resetPlanId(): void
```

##### `resetPublisherId` <a name="resetPublisherId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPublisherId"></a>

```typescript
public resetPublisherId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QumuloFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isConstruct"></a>

```typescript
import { qumuloFileSystem } from '@cdktf/provider-azurerm'

qumuloFileSystem.QumuloFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformElement"></a>

```typescript
import { qumuloFileSystem } from '@cdktf/provider-azurerm'

qumuloFileSystem.QumuloFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformResource"></a>

```typescript
import { qumuloFileSystem } from '@cdktf/provider-azurerm'

qumuloFileSystem.QumuloFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport"></a>

```typescript
import { qumuloFileSystem } from '@cdktf/provider-azurerm'

qumuloFileSystem.QumuloFileSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QumuloFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QumuloFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QumuloFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QumuloFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference">QumuloFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerIdInput">offerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planIdInput">planIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherIdInput">publisherIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSkuInput">storageSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerId">offerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planId">planId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherId">publisherId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSku">storageSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeouts"></a>

```typescript
public readonly timeouts: QumuloFileSystemTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference">QumuloFileSystemTimeoutsOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `offerIdInput`<sup>Optional</sup> <a name="offerIdInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerIdInput"></a>

```typescript
public readonly offerIdInput: string;
```

- *Type:* string

---

##### `planIdInput`<sup>Optional</sup> <a name="planIdInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planIdInput"></a>

```typescript
public readonly planIdInput: string;
```

- *Type:* string

---

##### `publisherIdInput`<sup>Optional</sup> <a name="publisherIdInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherIdInput"></a>

```typescript
public readonly publisherIdInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `storageSkuInput`<sup>Optional</sup> <a name="storageSkuInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSkuInput"></a>

```typescript
public readonly storageSkuInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | QumuloFileSystemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `offerId`<sup>Required</sup> <a name="offerId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerId"></a>

```typescript
public readonly offerId: string;
```

- *Type:* string

---

##### `planId`<sup>Required</sup> <a name="planId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planId"></a>

```typescript
public readonly planId: string;
```

- *Type:* string

---

##### `publisherId`<sup>Required</sup> <a name="publisherId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherId"></a>

```typescript
public readonly publisherId: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `storageSku`<sup>Required</sup> <a name="storageSku" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSku"></a>

```typescript
public readonly storageSku: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QumuloFileSystemConfig <a name="QumuloFileSystemConfig" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.Initializer"></a>

```typescript
import { qumuloFileSystem } from '@cdktf/provider-azurerm'

const qumuloFileSystemConfig: qumuloFileSystem.QumuloFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.adminPassword">adminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#admin_password QumuloFileSystem#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#email QumuloFileSystem#email}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#location QumuloFileSystem#location}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#name QumuloFileSystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#resource_group_name QumuloFileSystem#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.storageSku">storageSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#storage_sku QumuloFileSystem#storage_sku}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#subnet_id QumuloFileSystem#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#zone QumuloFileSystem#zone}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#id QumuloFileSystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.offerId">offerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#offer_id QumuloFileSystem#offer_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.planId">planId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#plan_id QumuloFileSystem#plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.publisherId">publisherId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#publisher_id QumuloFileSystem#publisher_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#tags QumuloFileSystem#tags}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#admin_password QumuloFileSystem#admin_password}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#email QumuloFileSystem#email}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#location QumuloFileSystem#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#name QumuloFileSystem#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#resource_group_name QumuloFileSystem#resource_group_name}.

---

##### `storageSku`<sup>Required</sup> <a name="storageSku" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.storageSku"></a>

```typescript
public readonly storageSku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#storage_sku QumuloFileSystem#storage_sku}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#subnet_id QumuloFileSystem#subnet_id}.

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#zone QumuloFileSystem#zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#id QumuloFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offerId`<sup>Optional</sup> <a name="offerId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.offerId"></a>

```typescript
public readonly offerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#offer_id QumuloFileSystem#offer_id}.

---

##### `planId`<sup>Optional</sup> <a name="planId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.planId"></a>

```typescript
public readonly planId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#plan_id QumuloFileSystem#plan_id}.

---

##### `publisherId`<sup>Optional</sup> <a name="publisherId" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.publisherId"></a>

```typescript
public readonly publisherId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#publisher_id QumuloFileSystem#publisher_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#tags QumuloFileSystem#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: QumuloFileSystemTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#timeouts QumuloFileSystem#timeouts}

---

### QumuloFileSystemTimeouts <a name="QumuloFileSystemTimeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.Initializer"></a>

```typescript
import { qumuloFileSystem } from '@cdktf/provider-azurerm'

const qumuloFileSystemTimeouts: qumuloFileSystem.QumuloFileSystemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#create QumuloFileSystem#create}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#delete QumuloFileSystem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#read QumuloFileSystem#read}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#update QumuloFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#create QumuloFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#delete QumuloFileSystem#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#read QumuloFileSystem#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/qumulo_file_system#update QumuloFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QumuloFileSystemTimeoutsOutputReference <a name="QumuloFileSystemTimeoutsOutputReference" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer"></a>

```typescript
import { qumuloFileSystem } from '@cdktf/provider-azurerm'

new qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QumuloFileSystemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>

---



