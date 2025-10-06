# `devCenterProjectEnvironmentType` Submodule <a name="`devCenterProjectEnvironmentType` Submodule" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterProjectEnvironmentType <a name="DevCenterProjectEnvironmentType" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type azurerm_dev_center_project_environment_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

new devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType(scope: Construct, id: string, config: DevCenterProjectEnvironmentTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig">DevCenterProjectEnvironmentTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig">DevCenterProjectEnvironmentTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putUserRoleAssignment">putUserRoleAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetCreatorRoleAssignmentRoles">resetCreatorRoleAssignmentRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetUserRoleAssignment">resetUserRoleAssignment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putIdentity"></a>

```typescript
public putIdentity(value: DevCenterProjectEnvironmentTypeIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putTimeouts"></a>

```typescript
public putTimeouts(value: DevCenterProjectEnvironmentTypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

---

##### `putUserRoleAssignment` <a name="putUserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putUserRoleAssignment"></a>

```typescript
public putUserRoleAssignment(value: IResolvable | DevCenterProjectEnvironmentTypeUserRoleAssignment[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putUserRoleAssignment.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>[]

---

##### `resetCreatorRoleAssignmentRoles` <a name="resetCreatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetCreatorRoleAssignmentRoles"></a>

```typescript
public resetCreatorRoleAssignmentRoles(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserRoleAssignment` <a name="resetUserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetUserRoleAssignment"></a>

```typescript
public resetUserRoleAssignment(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevCenterProjectEnvironmentType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isConstruct"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformElement"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformResource"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevCenterProjectEnvironmentType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevCenterProjectEnvironmentType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevCenterProjectEnvironmentType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterProjectEnvironmentType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference">DevCenterProjectEnvironmentTypeIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference">DevCenterProjectEnvironmentTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignment">userRoleAssignment</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList">DevCenterProjectEnvironmentTypeUserRoleAssignmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRolesInput">creatorRoleAssignmentRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetIdInput">deploymentTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectIdInput">devCenterProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignmentInput">userRoleAssignmentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRoles">creatorRoleAssignmentRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetId">deploymentTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectId">devCenterProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identity"></a>

```typescript
public readonly identity: DevCenterProjectEnvironmentTypeIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference">DevCenterProjectEnvironmentTypeIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeouts"></a>

```typescript
public readonly timeouts: DevCenterProjectEnvironmentTypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference">DevCenterProjectEnvironmentTypeTimeoutsOutputReference</a>

---

##### `userRoleAssignment`<sup>Required</sup> <a name="userRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignment"></a>

```typescript
public readonly userRoleAssignment: DevCenterProjectEnvironmentTypeUserRoleAssignmentList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList">DevCenterProjectEnvironmentTypeUserRoleAssignmentList</a>

---

##### `creatorRoleAssignmentRolesInput`<sup>Optional</sup> <a name="creatorRoleAssignmentRolesInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRolesInput"></a>

```typescript
public readonly creatorRoleAssignmentRolesInput: string[];
```

- *Type:* string[]

---

##### `deploymentTargetIdInput`<sup>Optional</sup> <a name="deploymentTargetIdInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetIdInput"></a>

```typescript
public readonly deploymentTargetIdInput: string;
```

- *Type:* string

---

##### `devCenterProjectIdInput`<sup>Optional</sup> <a name="devCenterProjectIdInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectIdInput"></a>

```typescript
public readonly devCenterProjectIdInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identityInput"></a>

```typescript
public readonly identityInput: DevCenterProjectEnvironmentTypeIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevCenterProjectEnvironmentTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

---

##### `userRoleAssignmentInput`<sup>Optional</sup> <a name="userRoleAssignmentInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignmentInput"></a>

```typescript
public readonly userRoleAssignmentInput: IResolvable | DevCenterProjectEnvironmentTypeUserRoleAssignment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>[]

---

##### `creatorRoleAssignmentRoles`<sup>Required</sup> <a name="creatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRoles"></a>

```typescript
public readonly creatorRoleAssignmentRoles: string[];
```

- *Type:* string[]

---

##### `deploymentTargetId`<sup>Required</sup> <a name="deploymentTargetId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetId"></a>

```typescript
public readonly deploymentTargetId: string;
```

- *Type:* string

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectId"></a>

```typescript
public readonly devCenterProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterProjectEnvironmentTypeConfig <a name="DevCenterProjectEnvironmentTypeConfig" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.Initializer"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

const devCenterProjectEnvironmentTypeConfig: devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.deploymentTargetId">deploymentTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#deployment_target_id DevCenterProjectEnvironmentType#deployment_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.devCenterProjectId">devCenterProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#dev_center_project_id DevCenterProjectEnvironmentType#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#location DevCenterProjectEnvironmentType#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#name DevCenterProjectEnvironmentType#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.creatorRoleAssignmentRoles">creatorRoleAssignmentRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#creator_role_assignment_roles DevCenterProjectEnvironmentType#creator_role_assignment_roles}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#id DevCenterProjectEnvironmentType#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#tags DevCenterProjectEnvironmentType#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.userRoleAssignment">userRoleAssignment</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>[]</code> | user_role_assignment block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentTargetId`<sup>Required</sup> <a name="deploymentTargetId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.deploymentTargetId"></a>

```typescript
public readonly deploymentTargetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#deployment_target_id DevCenterProjectEnvironmentType#deployment_target_id}.

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.devCenterProjectId"></a>

```typescript
public readonly devCenterProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#dev_center_project_id DevCenterProjectEnvironmentType#dev_center_project_id}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.identity"></a>

```typescript
public readonly identity: DevCenterProjectEnvironmentTypeIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#identity DevCenterProjectEnvironmentType#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#location DevCenterProjectEnvironmentType#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#name DevCenterProjectEnvironmentType#name}.

---

##### `creatorRoleAssignmentRoles`<sup>Optional</sup> <a name="creatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.creatorRoleAssignmentRoles"></a>

```typescript
public readonly creatorRoleAssignmentRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#creator_role_assignment_roles DevCenterProjectEnvironmentType#creator_role_assignment_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#id DevCenterProjectEnvironmentType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#tags DevCenterProjectEnvironmentType#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevCenterProjectEnvironmentTypeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#timeouts DevCenterProjectEnvironmentType#timeouts}

---

##### `userRoleAssignment`<sup>Optional</sup> <a name="userRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.userRoleAssignment"></a>

```typescript
public readonly userRoleAssignment: IResolvable | DevCenterProjectEnvironmentTypeUserRoleAssignment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>[]

user_role_assignment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#user_role_assignment DevCenterProjectEnvironmentType#user_role_assignment}

---

### DevCenterProjectEnvironmentTypeIdentity <a name="DevCenterProjectEnvironmentTypeIdentity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.Initializer"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

const devCenterProjectEnvironmentTypeIdentity: devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#type DevCenterProjectEnvironmentType#type}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#identity_ids DevCenterProjectEnvironmentType#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#type DevCenterProjectEnvironmentType#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#identity_ids DevCenterProjectEnvironmentType#identity_ids}.

---

### DevCenterProjectEnvironmentTypeTimeouts <a name="DevCenterProjectEnvironmentTypeTimeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.Initializer"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

const devCenterProjectEnvironmentTypeTimeouts: devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#create DevCenterProjectEnvironmentType#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#delete DevCenterProjectEnvironmentType#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#read DevCenterProjectEnvironmentType#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#update DevCenterProjectEnvironmentType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#create DevCenterProjectEnvironmentType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#delete DevCenterProjectEnvironmentType#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#read DevCenterProjectEnvironmentType#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#update DevCenterProjectEnvironmentType#update}.

---

### DevCenterProjectEnvironmentTypeUserRoleAssignment <a name="DevCenterProjectEnvironmentTypeUserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.Initializer"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

const devCenterProjectEnvironmentTypeUserRoleAssignment: devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.roles">roles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#roles DevCenterProjectEnvironmentType#roles}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#user_id DevCenterProjectEnvironmentType#user_id}. |

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#roles DevCenterProjectEnvironmentType#roles}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_environment_type#user_id DevCenterProjectEnvironmentType#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterProjectEnvironmentTypeIdentityOutputReference <a name="DevCenterProjectEnvironmentTypeIdentityOutputReference" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

new devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevCenterProjectEnvironmentTypeIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

---


### DevCenterProjectEnvironmentTypeTimeoutsOutputReference <a name="DevCenterProjectEnvironmentTypeTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

new devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevCenterProjectEnvironmentTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

---


### DevCenterProjectEnvironmentTypeUserRoleAssignmentList <a name="DevCenterProjectEnvironmentTypeUserRoleAssignmentList" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

new devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.get"></a>

```typescript
public get(index: number): DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevCenterProjectEnvironmentTypeUserRoleAssignment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>[]

---


### DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference <a name="DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer"></a>

```typescript
import { devCenterProjectEnvironmentType } from '@cdktf/provider-azurerm'

new devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevCenterProjectEnvironmentTypeUserRoleAssignment;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment">DevCenterProjectEnvironmentTypeUserRoleAssignment</a>

---



