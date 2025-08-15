# `systemCenterVirtualMachineManagerAvailabilitySet` Submodule <a name="`systemCenterVirtualMachineManagerAvailabilitySet` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerAvailabilitySet <a name="SystemCenterVirtualMachineManagerAvailabilitySet" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set azurerm_system_center_virtual_machine_manager_availability_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerAvailabilitySet } from '@cdktf/provider-azurerm'

new systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet(scope: Construct, id: string, config: SystemCenterVirtualMachineManagerAvailabilitySetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig">SystemCenterVirtualMachineManagerAvailabilitySetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig">SystemCenterVirtualMachineManagerAvailabilitySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts"></a>

```typescript
public putTimeouts(value: SystemCenterVirtualMachineManagerAvailabilitySetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerAvailabilitySet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct"></a>

```typescript
import { systemCenterVirtualMachineManagerAvailabilitySet } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement"></a>

```typescript
import { systemCenterVirtualMachineManagerAvailabilitySet } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource"></a>

```typescript
import { systemCenterVirtualMachineManagerAvailabilitySet } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport"></a>

```typescript
import { systemCenterVirtualMachineManagerAvailabilitySet } from '@cdktf/provider-azurerm'

systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerAvailabilitySet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SystemCenterVirtualMachineManagerAvailabilitySet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SystemCenterVirtualMachineManagerAvailabilitySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerAvailabilitySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference">SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationIdInput">customLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerIdInput">systemCenterVirtualMachineManagerServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationId">customLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerId">systemCenterVirtualMachineManagerServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeouts"></a>

```typescript
public readonly timeouts: SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference">SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference</a>

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationIdInput"></a>

```typescript
public readonly customLocationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `systemCenterVirtualMachineManagerServerIdInput`<sup>Optional</sup> <a name="systemCenterVirtualMachineManagerServerIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerIdInput"></a>

```typescript
public readonly systemCenterVirtualMachineManagerServerIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SystemCenterVirtualMachineManagerAvailabilitySetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationId"></a>

```typescript
public readonly customLocationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `systemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerId"></a>

```typescript
public readonly systemCenterVirtualMachineManagerServerId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerAvailabilitySetConfig <a name="SystemCenterVirtualMachineManagerAvailabilitySetConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerAvailabilitySet } from '@cdktf/provider-azurerm'

const systemCenterVirtualMachineManagerAvailabilitySetConfig: systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.customLocationId">customLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.systemCenterVirtualMachineManagerServerId">systemCenterVirtualMachineManagerServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.customLocationId"></a>

```typescript
public readonly customLocationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}.

---

##### `systemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.systemCenterVirtualMachineManagerServerId"></a>

```typescript
public readonly systemCenterVirtualMachineManagerServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SystemCenterVirtualMachineManagerAvailabilitySetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#timeouts SystemCenterVirtualMachineManagerAvailabilitySet#timeouts}

---

### SystemCenterVirtualMachineManagerAvailabilitySetTimeouts <a name="SystemCenterVirtualMachineManagerAvailabilitySetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerAvailabilitySet } from '@cdktf/provider-azurerm'

const systemCenterVirtualMachineManagerAvailabilitySetTimeouts: systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#create SystemCenterVirtualMachineManagerAvailabilitySet#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#delete SystemCenterVirtualMachineManagerAvailabilitySet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#read SystemCenterVirtualMachineManagerAvailabilitySet#read}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#update SystemCenterVirtualMachineManagerAvailabilitySet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#create SystemCenterVirtualMachineManagerAvailabilitySet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#delete SystemCenterVirtualMachineManagerAvailabilitySet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#read SystemCenterVirtualMachineManagerAvailabilitySet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/system_center_virtual_machine_manager_availability_set#update SystemCenterVirtualMachineManagerAvailabilitySet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer"></a>

```typescript
import { systemCenterVirtualMachineManagerAvailabilitySet } from '@cdktf/provider-azurerm'

new systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SystemCenterVirtualMachineManagerAvailabilitySetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

---



