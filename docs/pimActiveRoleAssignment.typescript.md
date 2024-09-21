# `pimActiveRoleAssignment` Submodule <a name="`pimActiveRoleAssignment` Submodule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PimActiveRoleAssignment <a name="PimActiveRoleAssignment" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment azurerm_pim_active_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

new pimActiveRoleAssignment.PimActiveRoleAssignment(scope: Construct, id: string, config: PimActiveRoleAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig">PimActiveRoleAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig">PimActiveRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket">putTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetJustification">resetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTicket">resetTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule"></a>

```typescript
public putSchedule(value: PimActiveRoleAssignmentSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---

##### `putTicket` <a name="putTicket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket"></a>

```typescript
public putTicket(value: PimActiveRoleAssignmentTicket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: PimActiveRoleAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJustification` <a name="resetJustification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetJustification"></a>

```typescript
public resetJustification(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTicket` <a name="resetTicket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTicket"></a>

```typescript
public resetTicket(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PimActiveRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PimActiveRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PimActiveRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PimActiveRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PimActiveRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference">PimActiveRoleAssignmentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticket">ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference">PimActiveRoleAssignmentTicketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference">PimActiveRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justificationInput">justificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticketInput">ticketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justification">justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.schedule"></a>

```typescript
public readonly schedule: PimActiveRoleAssignmentScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference">PimActiveRoleAssignmentScheduleOutputReference</a>

---

##### `ticket`<sup>Required</sup> <a name="ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticket"></a>

```typescript
public readonly ticket: PimActiveRoleAssignmentTicketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference">PimActiveRoleAssignmentTicketOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: PimActiveRoleAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference">PimActiveRoleAssignmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `justificationInput`<sup>Optional</sup> <a name="justificationInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justificationInput"></a>

```typescript
public readonly justificationInput: string;
```

- *Type:* string

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionIdInput"></a>

```typescript
public readonly roleDefinitionIdInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: PimActiveRoleAssignmentSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `ticketInput`<sup>Optional</sup> <a name="ticketInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticketInput"></a>

```typescript
public readonly ticketInput: PimActiveRoleAssignmentTicket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PimActiveRoleAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PimActiveRoleAssignmentConfig <a name="PimActiveRoleAssignmentConfig" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.Initializer"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

const pimActiveRoleAssignmentConfig: pimActiveRoleAssignment.PimActiveRoleAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.principalId">principalId</a></code> | <code>string</code> | Object ID of the principal for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | Role definition ID for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.scope">scope</a></code> | <code>string</code> | Scope for this role assignment, should be a valid resource ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.justification">justification</a></code> | <code>string</code> | The justification for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.ticket">ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | ticket block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

Object ID of the principal for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#principal_id PimActiveRoleAssignment#principal_id}

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

Role definition ID for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#role_definition_id PimActiveRoleAssignment#role_definition_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Scope for this role assignment, should be a valid resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#scope PimActiveRoleAssignment#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

The justification for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#justification PimActiveRoleAssignment#justification}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.schedule"></a>

```typescript
public readonly schedule: PimActiveRoleAssignmentSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#schedule PimActiveRoleAssignment#schedule}

---

##### `ticket`<sup>Optional</sup> <a name="ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.ticket"></a>

```typescript
public readonly ticket: PimActiveRoleAssignmentTicket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

ticket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#ticket PimActiveRoleAssignment#ticket}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PimActiveRoleAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#timeouts PimActiveRoleAssignment#timeouts}

---

### PimActiveRoleAssignmentSchedule <a name="PimActiveRoleAssignmentSchedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.Initializer"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

const pimActiveRoleAssignmentSchedule: pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.startDateTime">startDateTime</a></code> | <code>string</code> | The start date/time of the role assignment. |

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.expiration"></a>

```typescript
public readonly expiration: PimActiveRoleAssignmentScheduleExpiration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#expiration PimActiveRoleAssignment#expiration}

---

##### `startDateTime`<sup>Optional</sup> <a name="startDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.startDateTime"></a>

```typescript
public readonly startDateTime: string;
```

- *Type:* string

The start date/time of the role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#start_date_time PimActiveRoleAssignment#start_date_time}

---

### PimActiveRoleAssignmentScheduleExpiration <a name="PimActiveRoleAssignmentScheduleExpiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.Initializer"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

const pimActiveRoleAssignmentScheduleExpiration: pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationDays">durationDays</a></code> | <code>number</code> | The duration of the role assignment in days. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationHours">durationHours</a></code> | <code>number</code> | The duration of the role assignment in hours. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.endDateTime">endDateTime</a></code> | <code>string</code> | The end date/time of the role assignment. |

---

##### `durationDays`<sup>Optional</sup> <a name="durationDays" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationDays"></a>

```typescript
public readonly durationDays: number;
```

- *Type:* number

The duration of the role assignment in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#duration_days PimActiveRoleAssignment#duration_days}

---

##### `durationHours`<sup>Optional</sup> <a name="durationHours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationHours"></a>

```typescript
public readonly durationHours: number;
```

- *Type:* number

The duration of the role assignment in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#duration_hours PimActiveRoleAssignment#duration_hours}

---

##### `endDateTime`<sup>Optional</sup> <a name="endDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.endDateTime"></a>

```typescript
public readonly endDateTime: string;
```

- *Type:* string

The end date/time of the role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#end_date_time PimActiveRoleAssignment#end_date_time}

---

### PimActiveRoleAssignmentTicket <a name="PimActiveRoleAssignmentTicket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.Initializer"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

const pimActiveRoleAssignmentTicket: pimActiveRoleAssignment.PimActiveRoleAssignmentTicket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.number">number</a></code> | <code>string</code> | User-supplied ticket number to be included with the request. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.systemAttribute">systemAttribute</a></code> | <code>string</code> | User-supplied ticket system name to be included with the request. |

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

User-supplied ticket number to be included with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#number PimActiveRoleAssignment#number}

---

##### `systemAttribute`<sup>Optional</sup> <a name="systemAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: string;
```

- *Type:* string

User-supplied ticket system name to be included with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#system PimActiveRoleAssignment#system}

---

### PimActiveRoleAssignmentTimeouts <a name="PimActiveRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.Initializer"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

const pimActiveRoleAssignmentTimeouts: pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#create PimActiveRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#delete PimActiveRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#read PimActiveRoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#create PimActiveRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#delete PimActiveRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/pim_active_role_assignment#read PimActiveRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PimActiveRoleAssignmentScheduleExpirationOutputReference <a name="PimActiveRoleAssignmentScheduleExpirationOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

new pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationDays">resetDurationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationHours">resetDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime">resetEndDateTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationDays` <a name="resetDurationDays" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationDays"></a>

```typescript
public resetDurationDays(): void
```

##### `resetDurationHours` <a name="resetDurationHours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationHours"></a>

```typescript
public resetDurationHours(): void
```

##### `resetEndDateTime` <a name="resetEndDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime"></a>

```typescript
public resetEndDateTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput">durationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput">durationHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput">endDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDays">durationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHours">durationHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTime">endDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationDaysInput`<sup>Optional</sup> <a name="durationDaysInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput"></a>

```typescript
public readonly durationDaysInput: number;
```

- *Type:* number

---

##### `durationHoursInput`<sup>Optional</sup> <a name="durationHoursInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput"></a>

```typescript
public readonly durationHoursInput: number;
```

- *Type:* number

---

##### `endDateTimeInput`<sup>Optional</sup> <a name="endDateTimeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput"></a>

```typescript
public readonly endDateTimeInput: string;
```

- *Type:* string

---

##### `durationDays`<sup>Required</sup> <a name="durationDays" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDays"></a>

```typescript
public readonly durationDays: number;
```

- *Type:* number

---

##### `durationHours`<sup>Required</sup> <a name="durationHours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHours"></a>

```typescript
public readonly durationHours: number;
```

- *Type:* number

---

##### `endDateTime`<sup>Required</sup> <a name="endDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTime"></a>

```typescript
public readonly endDateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PimActiveRoleAssignmentScheduleExpiration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---


### PimActiveRoleAssignmentScheduleOutputReference <a name="PimActiveRoleAssignmentScheduleOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

new pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetStartDateTime">resetStartDateTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration"></a>

```typescript
public putExpiration(value: PimActiveRoleAssignmentScheduleExpiration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetStartDateTime` <a name="resetStartDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetStartDateTime"></a>

```typescript
public resetStartDateTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference">PimActiveRoleAssignmentScheduleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expirationInput">expirationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTimeInput">startDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTime">startDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expiration"></a>

```typescript
public readonly expiration: PimActiveRoleAssignmentScheduleExpirationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference">PimActiveRoleAssignmentScheduleExpirationOutputReference</a>

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: PimActiveRoleAssignmentScheduleExpiration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---

##### `startDateTimeInput`<sup>Optional</sup> <a name="startDateTimeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTimeInput"></a>

```typescript
public readonly startDateTimeInput: string;
```

- *Type:* string

---

##### `startDateTime`<sup>Required</sup> <a name="startDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTime"></a>

```typescript
public readonly startDateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PimActiveRoleAssignmentSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---


### PimActiveRoleAssignmentTicketOutputReference <a name="PimActiveRoleAssignmentTicketOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

new pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetSystemAttribute">resetSystemAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumber` <a name="resetNumber" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetNumber"></a>

```typescript
public resetNumber(): void
```

##### `resetSystemAttribute` <a name="resetSystemAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetSystemAttribute"></a>

```typescript
public resetSystemAttribute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.numberInput">numberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttributeInput">systemAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.number">number</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttribute">systemAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.numberInput"></a>

```typescript
public readonly numberInput: string;
```

- *Type:* string

---

##### `systemAttributeInput`<sup>Optional</sup> <a name="systemAttributeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttributeInput"></a>

```typescript
public readonly systemAttributeInput: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PimActiveRoleAssignmentTicket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---


### PimActiveRoleAssignmentTimeoutsOutputReference <a name="PimActiveRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { pimActiveRoleAssignment } from '@cdktf/provider-azurerm'

new pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PimActiveRoleAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

---



