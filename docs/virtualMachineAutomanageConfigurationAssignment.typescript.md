# `virtualMachineAutomanageConfigurationAssignment` Submodule <a name="`virtualMachineAutomanageConfigurationAssignment` Submodule" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineAutomanageConfigurationAssignment <a name="VirtualMachineAutomanageConfigurationAssignment" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment azurerm_virtual_machine_automanage_configuration_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer"></a>

```typescript
import { virtualMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

new virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment(scope: Construct, id: string, config: VirtualMachineAutomanageConfigurationAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig">VirtualMachineAutomanageConfigurationAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig">VirtualMachineAutomanageConfigurationAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualMachineAutomanageConfigurationAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts">VirtualMachineAutomanageConfigurationAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineAutomanageConfigurationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isConstruct"></a>

```typescript
import { virtualMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformElement"></a>

```typescript
import { virtualMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformResource"></a>

```typescript
import { virtualMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport"></a>

```typescript
import { virtualMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualMachineAutomanageConfigurationAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachineAutomanageConfigurationAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachineAutomanageConfigurationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineAutomanageConfigurationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference">VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts">VirtualMachineAutomanageConfigurationAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference">VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference</a>

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualMachineAutomanageConfigurationAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts">VirtualMachineAutomanageConfigurationAssignmentTimeouts</a>

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.virtualMachineIdInput"></a>

```typescript
public readonly virtualMachineIdInput: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineAutomanageConfigurationAssignmentConfig <a name="VirtualMachineAutomanageConfigurationAssignmentConfig" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.Initializer"></a>

```typescript
import { virtualMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

const virtualMachineAutomanageConfigurationAssignmentConfig: virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.configurationId">configurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#configuration_id VirtualMachineAutomanageConfigurationAssignment#configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#virtual_machine_id VirtualMachineAutomanageConfigurationAssignment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#id VirtualMachineAutomanageConfigurationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts">VirtualMachineAutomanageConfigurationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#configuration_id VirtualMachineAutomanageConfigurationAssignment#configuration_id}.

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#virtual_machine_id VirtualMachineAutomanageConfigurationAssignment#virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#id VirtualMachineAutomanageConfigurationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachineAutomanageConfigurationAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts">VirtualMachineAutomanageConfigurationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#timeouts VirtualMachineAutomanageConfigurationAssignment#timeouts}

---

### VirtualMachineAutomanageConfigurationAssignmentTimeouts <a name="VirtualMachineAutomanageConfigurationAssignmentTimeouts" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.Initializer"></a>

```typescript
import { virtualMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

const virtualMachineAutomanageConfigurationAssignmentTimeouts: virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#create VirtualMachineAutomanageConfigurationAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#delete VirtualMachineAutomanageConfigurationAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#read VirtualMachineAutomanageConfigurationAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#create VirtualMachineAutomanageConfigurationAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#delete VirtualMachineAutomanageConfigurationAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/virtual_machine_automanage_configuration_assignment#read VirtualMachineAutomanageConfigurationAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference <a name="VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

new virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts">VirtualMachineAutomanageConfigurationAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineAutomanageConfigurationAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineAutomanageConfigurationAssignment.VirtualMachineAutomanageConfigurationAssignmentTimeouts">VirtualMachineAutomanageConfigurationAssignmentTimeouts</a>

---



