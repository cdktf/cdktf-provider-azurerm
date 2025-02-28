# `managedApplicationDefinition` Submodule <a name="`managedApplicationDefinition` Submodule" id="@cdktf/provider-azurerm.managedApplicationDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedApplicationDefinition <a name="ManagedApplicationDefinition" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition azurerm_managed_application_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

new managedApplicationDefinition.ManagedApplicationDefinition(scope: Construct, id: string, config: ManagedApplicationDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig">ManagedApplicationDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig">ManagedApplicationDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetCreateUiDefinition">resetCreateUiDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetMainTemplate">resetMainTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageEnabled">resetPackageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageFileUri">resetPackageFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putAuthorization"></a>

```typescript
public putAuthorization(value: IResolvable | ManagedApplicationDefinitionAuthorization[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putAuthorization.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagedApplicationDefinitionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>

---

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCreateUiDefinition` <a name="resetCreateUiDefinition" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetCreateUiDefinition"></a>

```typescript
public resetCreateUiDefinition(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMainTemplate` <a name="resetMainTemplate" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetMainTemplate"></a>

```typescript
public resetMainTemplate(): void
```

##### `resetPackageEnabled` <a name="resetPackageEnabled" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageEnabled"></a>

```typescript
public resetPackageEnabled(): void
```

##### `resetPackageFileUri` <a name="resetPackageFileUri" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageFileUri"></a>

```typescript
public resetPackageFileUri(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedApplicationDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isConstruct"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

managedApplicationDefinition.ManagedApplicationDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformElement"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

managedApplicationDefinition.ManagedApplicationDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformResource"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

managedApplicationDefinition.ManagedApplicationDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedApplicationDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedApplicationDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedApplicationDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedApplicationDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList">ManagedApplicationDefinitionAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference">ManagedApplicationDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorizationInput">authorizationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinitionInput">createUiDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevelInput">lockLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplateInput">mainTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabledInput">packageEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUriInput">packageFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinition">createUiDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevel">lockLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplate">mainTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabled">packageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUri">packageFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorization"></a>

```typescript
public readonly authorization: ManagedApplicationDefinitionAuthorizationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList">ManagedApplicationDefinitionAuthorizationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedApplicationDefinitionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference">ManagedApplicationDefinitionTimeoutsOutputReference</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: IResolvable | ManagedApplicationDefinitionAuthorization[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]

---

##### `createUiDefinitionInput`<sup>Optional</sup> <a name="createUiDefinitionInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinitionInput"></a>

```typescript
public readonly createUiDefinitionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `lockLevelInput`<sup>Optional</sup> <a name="lockLevelInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevelInput"></a>

```typescript
public readonly lockLevelInput: string;
```

- *Type:* string

---

##### `mainTemplateInput`<sup>Optional</sup> <a name="mainTemplateInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplateInput"></a>

```typescript
public readonly mainTemplateInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `packageEnabledInput`<sup>Optional</sup> <a name="packageEnabledInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabledInput"></a>

```typescript
public readonly packageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packageFileUriInput`<sup>Optional</sup> <a name="packageFileUriInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUriInput"></a>

```typescript
public readonly packageFileUriInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagedApplicationDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>

---

##### `createUiDefinition`<sup>Required</sup> <a name="createUiDefinition" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinition"></a>

```typescript
public readonly createUiDefinition: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `lockLevel`<sup>Required</sup> <a name="lockLevel" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevel"></a>

```typescript
public readonly lockLevel: string;
```

- *Type:* string

---

##### `mainTemplate`<sup>Required</sup> <a name="mainTemplate" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplate"></a>

```typescript
public readonly mainTemplate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packageEnabled`<sup>Required</sup> <a name="packageEnabled" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabled"></a>

```typescript
public readonly packageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packageFileUri`<sup>Required</sup> <a name="packageFileUri" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUri"></a>

```typescript
public readonly packageFileUri: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedApplicationDefinitionAuthorization <a name="ManagedApplicationDefinitionAuthorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.Initializer"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

const managedApplicationDefinitionAuthorization: managedApplicationDefinition.ManagedApplicationDefinitionAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#role_definition_id ManagedApplicationDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#service_principal_id ManagedApplicationDefinition#service_principal_id}. |

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#role_definition_id ManagedApplicationDefinition#role_definition_id}.

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#service_principal_id ManagedApplicationDefinition#service_principal_id}.

---

### ManagedApplicationDefinitionConfig <a name="ManagedApplicationDefinitionConfig" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.Initializer"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

const managedApplicationDefinitionConfig: managedApplicationDefinition.ManagedApplicationDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#display_name ManagedApplicationDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#location ManagedApplicationDefinition#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lockLevel">lockLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#lock_level ManagedApplicationDefinition#lock_level}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#name ManagedApplicationDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#resource_group_name ManagedApplicationDefinition#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.authorization">authorization</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]</code> | authorization block. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.createUiDefinition">createUiDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#create_ui_definition ManagedApplicationDefinition#create_ui_definition}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#description ManagedApplicationDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#id ManagedApplicationDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.mainTemplate">mainTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#main_template ManagedApplicationDefinition#main_template}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageEnabled">packageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#package_enabled ManagedApplicationDefinition#package_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageFileUri">packageFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#package_file_uri ManagedApplicationDefinition#package_file_uri}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#tags ManagedApplicationDefinition#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#display_name ManagedApplicationDefinition#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#location ManagedApplicationDefinition#location}.

---

##### `lockLevel`<sup>Required</sup> <a name="lockLevel" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lockLevel"></a>

```typescript
public readonly lockLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#lock_level ManagedApplicationDefinition#lock_level}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#name ManagedApplicationDefinition#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#resource_group_name ManagedApplicationDefinition#resource_group_name}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.authorization"></a>

```typescript
public readonly authorization: IResolvable | ManagedApplicationDefinitionAuthorization[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#authorization ManagedApplicationDefinition#authorization}

---

##### `createUiDefinition`<sup>Optional</sup> <a name="createUiDefinition" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.createUiDefinition"></a>

```typescript
public readonly createUiDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#create_ui_definition ManagedApplicationDefinition#create_ui_definition}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#description ManagedApplicationDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#id ManagedApplicationDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mainTemplate`<sup>Optional</sup> <a name="mainTemplate" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.mainTemplate"></a>

```typescript
public readonly mainTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#main_template ManagedApplicationDefinition#main_template}.

---

##### `packageEnabled`<sup>Optional</sup> <a name="packageEnabled" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageEnabled"></a>

```typescript
public readonly packageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#package_enabled ManagedApplicationDefinition#package_enabled}.

---

##### `packageFileUri`<sup>Optional</sup> <a name="packageFileUri" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageFileUri"></a>

```typescript
public readonly packageFileUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#package_file_uri ManagedApplicationDefinition#package_file_uri}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#tags ManagedApplicationDefinition#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedApplicationDefinitionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#timeouts ManagedApplicationDefinition#timeouts}

---

### ManagedApplicationDefinitionTimeouts <a name="ManagedApplicationDefinitionTimeouts" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.Initializer"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

const managedApplicationDefinitionTimeouts: managedApplicationDefinition.ManagedApplicationDefinitionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#create ManagedApplicationDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#delete ManagedApplicationDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#read ManagedApplicationDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#update ManagedApplicationDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#create ManagedApplicationDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#delete ManagedApplicationDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#read ManagedApplicationDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/managed_application_definition#update ManagedApplicationDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedApplicationDefinitionAuthorizationList <a name="ManagedApplicationDefinitionAuthorizationList" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

new managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.get"></a>

```typescript
public get(index: number): ManagedApplicationDefinitionAuthorizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedApplicationDefinitionAuthorization[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]

---


### ManagedApplicationDefinitionAuthorizationOutputReference <a name="ManagedApplicationDefinitionAuthorizationOutputReference" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

new managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput"></a>

```typescript
public readonly roleDefinitionIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedApplicationDefinitionAuthorization;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>

---


### ManagedApplicationDefinitionTimeoutsOutputReference <a name="ManagedApplicationDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer"></a>

```typescript
import { managedApplicationDefinition } from '@cdktf/provider-azurerm'

new managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedApplicationDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>

---



