# `arcMachineAutomanageConfigurationAssignment` Submodule <a name="`arcMachineAutomanageConfigurationAssignment` Submodule" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcMachineAutomanageConfigurationAssignment <a name="ArcMachineAutomanageConfigurationAssignment" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment azurerm_arc_machine_automanage_configuration_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer"></a>

```typescript
import { arcMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

new arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment(scope: Construct, id: string, config: ArcMachineAutomanageConfigurationAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig">ArcMachineAutomanageConfigurationAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig">ArcMachineAutomanageConfigurationAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: ArcMachineAutomanageConfigurationAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ArcMachineAutomanageConfigurationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isConstruct"></a>

```typescript
import { arcMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformElement"></a>

```typescript
import { arcMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformResource"></a>

```typescript
import { arcMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport"></a>

```typescript
import { arcMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ArcMachineAutomanageConfigurationAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArcMachineAutomanageConfigurationAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArcMachineAutomanageConfigurationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArcMachineAutomanageConfigurationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference">ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineIdInput">arcMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineId">arcMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference">ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference</a>

---

##### `arcMachineIdInput`<sup>Optional</sup> <a name="arcMachineIdInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineIdInput"></a>

```typescript
public readonly arcMachineIdInput: string;
```

- *Type:* string

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ArcMachineAutomanageConfigurationAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a>

---

##### `arcMachineId`<sup>Required</sup> <a name="arcMachineId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineId"></a>

```typescript
public readonly arcMachineId: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcMachineAutomanageConfigurationAssignmentConfig <a name="ArcMachineAutomanageConfigurationAssignmentConfig" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.Initializer"></a>

```typescript
import { arcMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

const arcMachineAutomanageConfigurationAssignmentConfig: arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.arcMachineId">arcMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#arc_machine_id ArcMachineAutomanageConfigurationAssignment#arc_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.configurationId">configurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#configuration_id ArcMachineAutomanageConfigurationAssignment#configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#id ArcMachineAutomanageConfigurationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arcMachineId`<sup>Required</sup> <a name="arcMachineId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.arcMachineId"></a>

```typescript
public readonly arcMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#arc_machine_id ArcMachineAutomanageConfigurationAssignment#arc_machine_id}.

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#configuration_id ArcMachineAutomanageConfigurationAssignment#configuration_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#id ArcMachineAutomanageConfigurationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ArcMachineAutomanageConfigurationAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#timeouts ArcMachineAutomanageConfigurationAssignment#timeouts}

---

### ArcMachineAutomanageConfigurationAssignmentTimeouts <a name="ArcMachineAutomanageConfigurationAssignmentTimeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.Initializer"></a>

```typescript
import { arcMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

const arcMachineAutomanageConfigurationAssignmentTimeouts: arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#create ArcMachineAutomanageConfigurationAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#delete ArcMachineAutomanageConfigurationAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#read ArcMachineAutomanageConfigurationAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#create ArcMachineAutomanageConfigurationAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#delete ArcMachineAutomanageConfigurationAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_machine_automanage_configuration_assignment#read ArcMachineAutomanageConfigurationAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference <a name="ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { arcMachineAutomanageConfigurationAssignment } from '@cdktf/provider-azurerm'

new arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArcMachineAutomanageConfigurationAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a>

---



