# `devCenterDevBoxDefinition` Submodule <a name="`devCenterDevBoxDefinition` Submodule" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterDevBoxDefinition <a name="DevCenterDevBoxDefinition" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition azurerm_dev_center_dev_box_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer"></a>

```typescript
import { devCenterDevBoxDefinition } from '@cdktf/provider-azurerm'

new devCenterDevBoxDefinition.DevCenterDevBoxDefinition(scope: Construct, id: string, config: DevCenterDevBoxDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig">DevCenterDevBoxDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig">DevCenterDevBoxDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetHibernateSupportEnabled">resetHibernateSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.putTimeouts"></a>

```typescript
public putTimeouts(value: DevCenterDevBoxDefinitionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

---

##### `resetHibernateSupportEnabled` <a name="resetHibernateSupportEnabled" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetHibernateSupportEnabled"></a>

```typescript
public resetHibernateSupportEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevCenterDevBoxDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isConstruct"></a>

```typescript
import { devCenterDevBoxDefinition } from '@cdktf/provider-azurerm'

devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformElement"></a>

```typescript
import { devCenterDevBoxDefinition } from '@cdktf/provider-azurerm'

devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformResource"></a>

```typescript
import { devCenterDevBoxDefinition } from '@cdktf/provider-azurerm'

devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport"></a>

```typescript
import { devCenterDevBoxDefinition } from '@cdktf/provider-azurerm'

devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevCenterDevBoxDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevCenterDevBoxDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevCenterDevBoxDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterDevBoxDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference">DevCenterDevBoxDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterIdInput">devCenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabledInput">hibernateSupportEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceIdInput">imageReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterId">devCenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabled">hibernateSupportEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceId">imageReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeouts"></a>

```typescript
public readonly timeouts: DevCenterDevBoxDefinitionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference">DevCenterDevBoxDefinitionTimeoutsOutputReference</a>

---

##### `devCenterIdInput`<sup>Optional</sup> <a name="devCenterIdInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterIdInput"></a>

```typescript
public readonly devCenterIdInput: string;
```

- *Type:* string

---

##### `hibernateSupportEnabledInput`<sup>Optional</sup> <a name="hibernateSupportEnabledInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabledInput"></a>

```typescript
public readonly hibernateSupportEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageReferenceIdInput`<sup>Optional</sup> <a name="imageReferenceIdInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceIdInput"></a>

```typescript
public readonly imageReferenceIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevCenterDevBoxDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

---

##### `devCenterId`<sup>Required</sup> <a name="devCenterId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterId"></a>

```typescript
public readonly devCenterId: string;
```

- *Type:* string

---

##### `hibernateSupportEnabled`<sup>Required</sup> <a name="hibernateSupportEnabled" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabled"></a>

```typescript
public readonly hibernateSupportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageReferenceId`<sup>Required</sup> <a name="imageReferenceId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceId"></a>

```typescript
public readonly imageReferenceId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterDevBoxDefinitionConfig <a name="DevCenterDevBoxDefinitionConfig" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.Initializer"></a>

```typescript
import { devCenterDevBoxDefinition } from '@cdktf/provider-azurerm'

const devCenterDevBoxDefinitionConfig: devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.devCenterId">devCenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#dev_center_id DevCenterDevBoxDefinition#dev_center_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.imageReferenceId">imageReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#image_reference_id DevCenterDevBoxDefinition#image_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#location DevCenterDevBoxDefinition#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#name DevCenterDevBoxDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#sku_name DevCenterDevBoxDefinition#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.hibernateSupportEnabled">hibernateSupportEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#hibernate_support_enabled DevCenterDevBoxDefinition#hibernate_support_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#id DevCenterDevBoxDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#tags DevCenterDevBoxDefinition#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `devCenterId`<sup>Required</sup> <a name="devCenterId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.devCenterId"></a>

```typescript
public readonly devCenterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#dev_center_id DevCenterDevBoxDefinition#dev_center_id}.

---

##### `imageReferenceId`<sup>Required</sup> <a name="imageReferenceId" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.imageReferenceId"></a>

```typescript
public readonly imageReferenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#image_reference_id DevCenterDevBoxDefinition#image_reference_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#location DevCenterDevBoxDefinition#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#name DevCenterDevBoxDefinition#name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#sku_name DevCenterDevBoxDefinition#sku_name}.

---

##### `hibernateSupportEnabled`<sup>Optional</sup> <a name="hibernateSupportEnabled" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.hibernateSupportEnabled"></a>

```typescript
public readonly hibernateSupportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#hibernate_support_enabled DevCenterDevBoxDefinition#hibernate_support_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#id DevCenterDevBoxDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#tags DevCenterDevBoxDefinition#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevCenterDevBoxDefinitionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#timeouts DevCenterDevBoxDefinition#timeouts}

---

### DevCenterDevBoxDefinitionTimeouts <a name="DevCenterDevBoxDefinitionTimeouts" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.Initializer"></a>

```typescript
import { devCenterDevBoxDefinition } from '@cdktf/provider-azurerm'

const devCenterDevBoxDefinitionTimeouts: devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#create DevCenterDevBoxDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#delete DevCenterDevBoxDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#read DevCenterDevBoxDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#update DevCenterDevBoxDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#create DevCenterDevBoxDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#delete DevCenterDevBoxDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#read DevCenterDevBoxDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_dev_box_definition#update DevCenterDevBoxDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterDevBoxDefinitionTimeoutsOutputReference <a name="DevCenterDevBoxDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer"></a>

```typescript
import { devCenterDevBoxDefinition } from '@cdktf/provider-azurerm'

new devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevCenterDevBoxDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

---



