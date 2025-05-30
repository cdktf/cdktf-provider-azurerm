# `maintenanceAssignmentDynamicScope` Submodule <a name="`maintenanceAssignmentDynamicScope` Submodule" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceAssignmentDynamicScope <a name="MaintenanceAssignmentDynamicScope" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope azurerm_maintenance_assignment_dynamic_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

new maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope(scope: Construct, id: string, config: MaintenanceAssignmentDynamicScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig">MaintenanceAssignmentDynamicScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig">MaintenanceAssignmentDynamicScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putFilter"></a>

```typescript
public putFilter(value: MaintenanceAssignmentDynamicScopeFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putTimeouts"></a>

```typescript
public putTimeouts(value: MaintenanceAssignmentDynamicScopeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MaintenanceAssignmentDynamicScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isConstruct"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformElement"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformResource"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MaintenanceAssignmentDynamicScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MaintenanceAssignmentDynamicScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MaintenanceAssignmentDynamicScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MaintenanceAssignmentDynamicScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference">MaintenanceAssignmentDynamicScopeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference">MaintenanceAssignmentDynamicScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationIdInput">maintenanceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationId">maintenanceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filter"></a>

```typescript
public readonly filter: MaintenanceAssignmentDynamicScopeFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference">MaintenanceAssignmentDynamicScopeFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeouts"></a>

```typescript
public readonly timeouts: MaintenanceAssignmentDynamicScopeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference">MaintenanceAssignmentDynamicScopeTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.filterInput"></a>

```typescript
public readonly filterInput: MaintenanceAssignmentDynamicScopeFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceConfigurationIdInput`<sup>Optional</sup> <a name="maintenanceConfigurationIdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationIdInput"></a>

```typescript
public readonly maintenanceConfigurationIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MaintenanceAssignmentDynamicScopeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceConfigurationId`<sup>Required</sup> <a name="maintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.maintenanceConfigurationId"></a>

```typescript
public readonly maintenanceConfigurationId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceAssignmentDynamicScopeConfig <a name="MaintenanceAssignmentDynamicScopeConfig" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.Initializer"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

const maintenanceAssignmentDynamicScopeConfig: maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.maintenanceConfigurationId">maintenanceConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#maintenance_configuration_id MaintenanceAssignmentDynamicScope#maintenance_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#name MaintenanceAssignmentDynamicScope#name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#id MaintenanceAssignmentDynamicScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.filter"></a>

```typescript
public readonly filter: MaintenanceAssignmentDynamicScopeFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#filter MaintenanceAssignmentDynamicScope#filter}

---

##### `maintenanceConfigurationId`<sup>Required</sup> <a name="maintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.maintenanceConfigurationId"></a>

```typescript
public readonly maintenanceConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#maintenance_configuration_id MaintenanceAssignmentDynamicScope#maintenance_configuration_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#name MaintenanceAssignmentDynamicScope#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#id MaintenanceAssignmentDynamicScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MaintenanceAssignmentDynamicScopeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#timeouts MaintenanceAssignmentDynamicScope#timeouts}

---

### MaintenanceAssignmentDynamicScopeFilter <a name="MaintenanceAssignmentDynamicScopeFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.Initializer"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

const maintenanceAssignmentDynamicScopeFilter: maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.locations">locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#locations MaintenanceAssignmentDynamicScope#locations}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.osTypes">osTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#os_types MaintenanceAssignmentDynamicScope#os_types}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#resource_groups MaintenanceAssignmentDynamicScope#resource_groups}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#resource_types MaintenanceAssignmentDynamicScope#resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tagFilter">tagFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#tag_filter MaintenanceAssignmentDynamicScope#tag_filter}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>[]</code> | tags block. |

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#locations MaintenanceAssignmentDynamicScope#locations}.

---

##### `osTypes`<sup>Optional</sup> <a name="osTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.osTypes"></a>

```typescript
public readonly osTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#os_types MaintenanceAssignmentDynamicScope#os_types}.

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#resource_groups MaintenanceAssignmentDynamicScope#resource_groups}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#resource_types MaintenanceAssignmentDynamicScope#resource_types}.

---

##### `tagFilter`<sup>Optional</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tagFilter"></a>

```typescript
public readonly tagFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#tag_filter MaintenanceAssignmentDynamicScope#tag_filter}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter.property.tags"></a>

```typescript
public readonly tags: IResolvable | MaintenanceAssignmentDynamicScopeFilterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#tags MaintenanceAssignmentDynamicScope#tags}

---

### MaintenanceAssignmentDynamicScopeFilterTags <a name="MaintenanceAssignmentDynamicScopeFilterTags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.Initializer"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

const maintenanceAssignmentDynamicScopeFilterTags: maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#tag MaintenanceAssignmentDynamicScope#tag}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#values MaintenanceAssignmentDynamicScope#values}. |

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#tag MaintenanceAssignmentDynamicScope#tag}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#values MaintenanceAssignmentDynamicScope#values}.

---

### MaintenanceAssignmentDynamicScopeTimeouts <a name="MaintenanceAssignmentDynamicScopeTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.Initializer"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

const maintenanceAssignmentDynamicScopeTimeouts: maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#create MaintenanceAssignmentDynamicScope#create}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#delete MaintenanceAssignmentDynamicScope#delete}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#read MaintenanceAssignmentDynamicScope#read}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#update MaintenanceAssignmentDynamicScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#create MaintenanceAssignmentDynamicScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#delete MaintenanceAssignmentDynamicScope#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#read MaintenanceAssignmentDynamicScope#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/maintenance_assignment_dynamic_scope#update MaintenanceAssignmentDynamicScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceAssignmentDynamicScopeFilterOutputReference <a name="MaintenanceAssignmentDynamicScopeFilterOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

new maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetOsTypes">resetOsTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTagFilter">resetTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | MaintenanceAssignmentDynamicScopeFilterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>[]

---

##### `resetLocations` <a name="resetLocations" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetLocations"></a>

```typescript
public resetLocations(): void
```

##### `resetOsTypes` <a name="resetOsTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetOsTypes"></a>

```typescript
public resetOsTypes(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```

##### `resetTagFilter` <a name="resetTagFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTagFilter"></a>

```typescript
public resetTagFilter(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList">MaintenanceAssignmentDynamicScopeFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypesInput">osTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilterInput">tagFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypes">osTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilter">tagFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tags"></a>

```typescript
public readonly tags: MaintenanceAssignmentDynamicScopeFilterTagsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList">MaintenanceAssignmentDynamicScopeFilterTagsList</a>

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `osTypesInput`<sup>Optional</sup> <a name="osTypesInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypesInput"></a>

```typescript
public readonly osTypesInput: string[];
```

- *Type:* string[]

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `tagFilterInput`<sup>Optional</sup> <a name="tagFilterInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilterInput"></a>

```typescript
public readonly tagFilterInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MaintenanceAssignmentDynamicScopeFilterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `osTypes`<sup>Required</sup> <a name="osTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.osTypes"></a>

```typescript
public readonly osTypes: string[];
```

- *Type:* string[]

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.tagFilter"></a>

```typescript
public readonly tagFilter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MaintenanceAssignmentDynamicScopeFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilter">MaintenanceAssignmentDynamicScopeFilter</a>

---


### MaintenanceAssignmentDynamicScopeFilterTagsList <a name="MaintenanceAssignmentDynamicScopeFilterTagsList" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

new maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.get"></a>

```typescript
public get(index: number): MaintenanceAssignmentDynamicScopeFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MaintenanceAssignmentDynamicScopeFilterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>[]

---


### MaintenanceAssignmentDynamicScopeFilterTagsOutputReference <a name="MaintenanceAssignmentDynamicScopeFilterTagsOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

new maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MaintenanceAssignmentDynamicScopeFilterTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeFilterTags">MaintenanceAssignmentDynamicScopeFilterTags</a>

---


### MaintenanceAssignmentDynamicScopeTimeoutsOutputReference <a name="MaintenanceAssignmentDynamicScopeTimeoutsOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer"></a>

```typescript
import { maintenanceAssignmentDynamicScope } from '@cdktf/provider-azurerm'

new maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MaintenanceAssignmentDynamicScopeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDynamicScope.MaintenanceAssignmentDynamicScopeTimeouts">MaintenanceAssignmentDynamicScopeTimeouts</a>

---



