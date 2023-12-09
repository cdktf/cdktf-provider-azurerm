# `springCloudCustomizedAccelerator` Submodule <a name="`springCloudCustomizedAccelerator` Submodule" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudCustomizedAccelerator <a name="SpringCloudCustomizedAccelerator" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator azurerm_spring_cloud_customized_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

new springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator(scope: Construct, id: string, config: SpringCloudCustomizedAcceleratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig">SpringCloudCustomizedAcceleratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig">SpringCloudCustomizedAcceleratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository">putGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetAcceleratorTags">resetAcceleratorTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetIconUrl">resetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGitRepository` <a name="putGitRepository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository"></a>

```typescript
public putGitRepository(value: SpringCloudCustomizedAcceleratorGitRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudCustomizedAcceleratorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

---

##### `resetAcceleratorTags` <a name="resetAcceleratorTags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetAcceleratorTags"></a>

```typescript
public resetAcceleratorTags(): void
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetIconUrl` <a name="resetIconUrl" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetIconUrl"></a>

```typescript
public resetIconUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudCustomizedAccelerator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isConstruct"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformElement"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformResource"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.generateConfigForImport"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpringCloudCustomizedAccelerator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudCustomizedAccelerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudCustomizedAccelerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudCustomizedAccelerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference">SpringCloudCustomizedAcceleratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTagsInput">acceleratorTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrlInput">iconUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorIdInput">springCloudAcceleratorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTags">acceleratorTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrl">iconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorId">springCloudAcceleratorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepository"></a>

```typescript
public readonly gitRepository: SpringCloudCustomizedAcceleratorGitRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudCustomizedAcceleratorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference">SpringCloudCustomizedAcceleratorTimeoutsOutputReference</a>

---

##### `acceleratorTagsInput`<sup>Optional</sup> <a name="acceleratorTagsInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTagsInput"></a>

```typescript
public readonly acceleratorTagsInput: string[];
```

- *Type:* string[]

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepositoryInput"></a>

```typescript
public readonly gitRepositoryInput: SpringCloudCustomizedAcceleratorGitRepository;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

---

##### `iconUrlInput`<sup>Optional</sup> <a name="iconUrlInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrlInput"></a>

```typescript
public readonly iconUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `springCloudAcceleratorIdInput`<sup>Optional</sup> <a name="springCloudAcceleratorIdInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorIdInput"></a>

```typescript
public readonly springCloudAcceleratorIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudCustomizedAcceleratorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

---

##### `acceleratorTags`<sup>Required</sup> <a name="acceleratorTags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTags"></a>

```typescript
public readonly acceleratorTags: string[];
```

- *Type:* string[]

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrl"></a>

```typescript
public readonly iconUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `springCloudAcceleratorId`<sup>Required</sup> <a name="springCloudAcceleratorId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorId"></a>

```typescript
public readonly springCloudAcceleratorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudCustomizedAcceleratorConfig <a name="SpringCloudCustomizedAcceleratorConfig" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.Initializer"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

const springCloudCustomizedAcceleratorConfig: springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#name SpringCloudCustomizedAccelerator#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.springCloudAcceleratorId">springCloudAcceleratorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#spring_cloud_accelerator_id SpringCloudCustomizedAccelerator#spring_cloud_accelerator_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.acceleratorTags">acceleratorTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#accelerator_tags SpringCloudCustomizedAccelerator#accelerator_tags}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#accelerator_type SpringCloudCustomizedAccelerator#accelerator_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#description SpringCloudCustomizedAccelerator#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#display_name SpringCloudCustomizedAccelerator#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.iconUrl">iconUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#icon_url SpringCloudCustomizedAccelerator#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#id SpringCloudCustomizedAccelerator#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.gitRepository"></a>

```typescript
public readonly gitRepository: SpringCloudCustomizedAcceleratorGitRepository;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#git_repository SpringCloudCustomizedAccelerator#git_repository}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#name SpringCloudCustomizedAccelerator#name}.

---

##### `springCloudAcceleratorId`<sup>Required</sup> <a name="springCloudAcceleratorId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.springCloudAcceleratorId"></a>

```typescript
public readonly springCloudAcceleratorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#spring_cloud_accelerator_id SpringCloudCustomizedAccelerator#spring_cloud_accelerator_id}.

---

##### `acceleratorTags`<sup>Optional</sup> <a name="acceleratorTags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.acceleratorTags"></a>

```typescript
public readonly acceleratorTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#accelerator_tags SpringCloudCustomizedAccelerator#accelerator_tags}.

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#accelerator_type SpringCloudCustomizedAccelerator#accelerator_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#description SpringCloudCustomizedAccelerator#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#display_name SpringCloudCustomizedAccelerator#display_name}.

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.iconUrl"></a>

```typescript
public readonly iconUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#icon_url SpringCloudCustomizedAccelerator#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#id SpringCloudCustomizedAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudCustomizedAcceleratorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#timeouts SpringCloudCustomizedAccelerator#timeouts}

---

### SpringCloudCustomizedAcceleratorGitRepository <a name="SpringCloudCustomizedAcceleratorGitRepository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.Initializer"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

const springCloudCustomizedAcceleratorGitRepository: springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#url SpringCloudCustomizedAccelerator#url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a></code> | basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#branch SpringCloudCustomizedAccelerator#branch}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.caCertificateId">caCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#ca_certificate_id SpringCloudCustomizedAccelerator#ca_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.commit">commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#commit SpringCloudCustomizedAccelerator#commit}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.gitTag">gitTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#git_tag SpringCloudCustomizedAccelerator#git_tag}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#interval_in_seconds SpringCloudCustomizedAccelerator#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#path SpringCloudCustomizedAccelerator#path}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.sshAuth">sshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a></code> | ssh_auth block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#url SpringCloudCustomizedAccelerator#url}.

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.basicAuth"></a>

```typescript
public readonly basicAuth: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#basic_auth SpringCloudCustomizedAccelerator#basic_auth}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#branch SpringCloudCustomizedAccelerator#branch}.

---

##### `caCertificateId`<sup>Optional</sup> <a name="caCertificateId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.caCertificateId"></a>

```typescript
public readonly caCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#ca_certificate_id SpringCloudCustomizedAccelerator#ca_certificate_id}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#commit SpringCloudCustomizedAccelerator#commit}.

---

##### `gitTag`<sup>Optional</sup> <a name="gitTag" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.gitTag"></a>

```typescript
public readonly gitTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#git_tag SpringCloudCustomizedAccelerator#git_tag}.

---

##### `intervalInSeconds`<sup>Optional</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#interval_in_seconds SpringCloudCustomizedAccelerator#interval_in_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#path SpringCloudCustomizedAccelerator#path}.

---

##### `sshAuth`<sup>Optional</sup> <a name="sshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.sshAuth"></a>

```typescript
public readonly sshAuth: SpringCloudCustomizedAcceleratorGitRepositorySshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

ssh_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#ssh_auth SpringCloudCustomizedAccelerator#ssh_auth}

---

### SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth <a name="SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.Initializer"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

const springCloudCustomizedAcceleratorGitRepositoryBasicAuth: springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#password SpringCloudCustomizedAccelerator#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#username SpringCloudCustomizedAccelerator#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#password SpringCloudCustomizedAccelerator#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#username SpringCloudCustomizedAccelerator#username}.

---

### SpringCloudCustomizedAcceleratorGitRepositorySshAuth <a name="SpringCloudCustomizedAcceleratorGitRepositorySshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.Initializer"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

const springCloudCustomizedAcceleratorGitRepositorySshAuth: springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#private_key SpringCloudCustomizedAccelerator#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKey">hostKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#host_key SpringCloudCustomizedAccelerator#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#host_key_algorithm SpringCloudCustomizedAccelerator#host_key_algorithm}. |

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#private_key SpringCloudCustomizedAccelerator#private_key}.

---

##### `hostKey`<sup>Optional</sup> <a name="hostKey" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKey"></a>

```typescript
public readonly hostKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#host_key SpringCloudCustomizedAccelerator#host_key}.

---

##### `hostKeyAlgorithm`<sup>Optional</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKeyAlgorithm"></a>

```typescript
public readonly hostKeyAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#host_key_algorithm SpringCloudCustomizedAccelerator#host_key_algorithm}.

---

### SpringCloudCustomizedAcceleratorTimeouts <a name="SpringCloudCustomizedAcceleratorTimeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.Initializer"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

const springCloudCustomizedAcceleratorTimeouts: springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#create SpringCloudCustomizedAccelerator#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#delete SpringCloudCustomizedAccelerator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#read SpringCloudCustomizedAccelerator#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#update SpringCloudCustomizedAccelerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#create SpringCloudCustomizedAccelerator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#delete SpringCloudCustomizedAccelerator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#read SpringCloudCustomizedAccelerator#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/spring_cloud_customized_accelerator#update SpringCloudCustomizedAccelerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference <a name="SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

new springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

---


### SpringCloudCustomizedAcceleratorGitRepositoryOutputReference <a name="SpringCloudCustomizedAcceleratorGitRepositoryOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

new springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth">putSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCaCertificateId">resetCaCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetGitTag">resetGitTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetIntervalInSeconds">resetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetSshAuth">resetSshAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putBasicAuth"></a>

```typescript
public putBasicAuth(value: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

---

##### `putSshAuth` <a name="putSshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth"></a>

```typescript
public putSshAuth(value: SpringCloudCustomizedAcceleratorGitRepositorySshAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBasicAuth"></a>

```typescript
public resetBasicAuth(): void
```

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCaCertificateId` <a name="resetCaCertificateId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCaCertificateId"></a>

```typescript
public resetCaCertificateId(): void
```

##### `resetCommit` <a name="resetCommit" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```

##### `resetGitTag` <a name="resetGitTag" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetGitTag"></a>

```typescript
public resetGitTag(): void
```

##### `resetIntervalInSeconds` <a name="resetIntervalInSeconds" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetIntervalInSeconds"></a>

```typescript
public resetIntervalInSeconds(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetSshAuth` <a name="resetSshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetSshAuth"></a>

```typescript
public resetSshAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuth">sshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateIdInput">caCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTagInput">gitTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuthInput">sshAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateId">caCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTag">gitTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuth"></a>

```typescript
public readonly basicAuth: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference</a>

---

##### `sshAuth`<sup>Required</sup> <a name="sshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuth"></a>

```typescript
public readonly sshAuth: SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuthInput"></a>

```typescript
public readonly basicAuthInput: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `caCertificateIdInput`<sup>Optional</sup> <a name="caCertificateIdInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateIdInput"></a>

```typescript
public readonly caCertificateIdInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `gitTagInput`<sup>Optional</sup> <a name="gitTagInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTagInput"></a>

```typescript
public readonly gitTagInput: string;
```

- *Type:* string

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSecondsInput"></a>

```typescript
public readonly intervalInSecondsInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `sshAuthInput`<sup>Optional</sup> <a name="sshAuthInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuthInput"></a>

```typescript
public readonly sshAuthInput: SpringCloudCustomizedAcceleratorGitRepositorySshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `caCertificateId`<sup>Required</sup> <a name="caCertificateId" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateId"></a>

```typescript
public readonly caCertificateId: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `gitTag`<sup>Required</sup> <a name="gitTag" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTag"></a>

```typescript
public readonly gitTag: string;
```

- *Type:* string

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudCustomizedAcceleratorGitRepository;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

---


### SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference <a name="SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

new springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKey">resetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKeyAlgorithm">resetHostKeyAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostKey` <a name="resetHostKey" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKey"></a>

```typescript
public resetHostKey(): void
```

##### `resetHostKeyAlgorithm` <a name="resetHostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKeyAlgorithm"></a>

```typescript
public resetHostKeyAlgorithm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput">hostKeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyInput">hostKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKey">hostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostKeyAlgorithmInput`<sup>Optional</sup> <a name="hostKeyAlgorithmInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput"></a>

```typescript
public readonly hostKeyAlgorithmInput: string;
```

- *Type:* string

---

##### `hostKeyInput`<sup>Optional</sup> <a name="hostKeyInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyInput"></a>

```typescript
public readonly hostKeyInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `hostKey`<sup>Required</sup> <a name="hostKey" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKey"></a>

```typescript
public readonly hostKey: string;
```

- *Type:* string

---

##### `hostKeyAlgorithm`<sup>Required</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithm"></a>

```typescript
public readonly hostKeyAlgorithm: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudCustomizedAcceleratorGitRepositorySshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

---


### SpringCloudCustomizedAcceleratorTimeoutsOutputReference <a name="SpringCloudCustomizedAcceleratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudCustomizedAccelerator } from '@cdktf/provider-azurerm'

new springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudCustomizedAcceleratorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

---



