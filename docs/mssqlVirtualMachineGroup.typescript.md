# `mssqlVirtualMachineGroup` Submodule <a name="`mssqlVirtualMachineGroup` Submodule" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlVirtualMachineGroup <a name="MssqlVirtualMachineGroup" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group azurerm_mssql_virtual_machine_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer"></a>

```typescript
import { mssqlVirtualMachineGroup } from '@cdktf/provider-azurerm'

new mssqlVirtualMachineGroup.MssqlVirtualMachineGroup(scope: Construct, id: string, config: MssqlVirtualMachineGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig">MssqlVirtualMachineGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig">MssqlVirtualMachineGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile">putWsfcDomainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlVirtualMachineGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

---

##### `putWsfcDomainProfile` <a name="putWsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile"></a>

```typescript
public putWsfcDomainProfile(value: MssqlVirtualMachineGroupWsfcDomainProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlVirtualMachineGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct"></a>

```typescript
import { mssqlVirtualMachineGroup } from '@cdktf/provider-azurerm'

mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement"></a>

```typescript
import { mssqlVirtualMachineGroup } from '@cdktf/provider-azurerm'

mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource"></a>

```typescript
import { mssqlVirtualMachineGroup } from '@cdktf/provider-azurerm'

mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport"></a>

```typescript
import { mssqlVirtualMachineGroup } from '@cdktf/provider-azurerm'

mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MssqlVirtualMachineGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlVirtualMachineGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlVirtualMachineGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlVirtualMachineGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference">MssqlVirtualMachineGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfile">wsfcDomainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference">MssqlVirtualMachineGroupWsfcDomainProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOfferInput">sqlImageOfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSkuInput">sqlImageSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfileInput">wsfcDomainProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOffer">sqlImageOffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSku">sqlImageSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlVirtualMachineGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference">MssqlVirtualMachineGroupTimeoutsOutputReference</a>

---

##### `wsfcDomainProfile`<sup>Required</sup> <a name="wsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfile"></a>

```typescript
public readonly wsfcDomainProfile: MssqlVirtualMachineGroupWsfcDomainProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference">MssqlVirtualMachineGroupWsfcDomainProfileOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sqlImageOfferInput`<sup>Optional</sup> <a name="sqlImageOfferInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOfferInput"></a>

```typescript
public readonly sqlImageOfferInput: string;
```

- *Type:* string

---

##### `sqlImageSkuInput`<sup>Optional</sup> <a name="sqlImageSkuInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSkuInput"></a>

```typescript
public readonly sqlImageSkuInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlVirtualMachineGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

---

##### `wsfcDomainProfileInput`<sup>Optional</sup> <a name="wsfcDomainProfileInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfileInput"></a>

```typescript
public readonly wsfcDomainProfileInput: MssqlVirtualMachineGroupWsfcDomainProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sqlImageOffer`<sup>Required</sup> <a name="sqlImageOffer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOffer"></a>

```typescript
public readonly sqlImageOffer: string;
```

- *Type:* string

---

##### `sqlImageSku`<sup>Required</sup> <a name="sqlImageSku" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSku"></a>

```typescript
public readonly sqlImageSku: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlVirtualMachineGroupConfig <a name="MssqlVirtualMachineGroupConfig" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.Initializer"></a>

```typescript
import { mssqlVirtualMachineGroup } from '@cdktf/provider-azurerm'

const mssqlVirtualMachineGroupConfig: mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageOffer">sqlImageOffer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageSku">sqlImageSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.wsfcDomainProfile">wsfcDomainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | wsfc_domain_profile block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}.

---

##### `sqlImageOffer`<sup>Required</sup> <a name="sqlImageOffer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageOffer"></a>

```typescript
public readonly sqlImageOffer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}.

---

##### `sqlImageSku`<sup>Required</sup> <a name="sqlImageSku" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageSku"></a>

```typescript
public readonly sqlImageSku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}.

---

##### `wsfcDomainProfile`<sup>Required</sup> <a name="wsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.wsfcDomainProfile"></a>

```typescript
public readonly wsfcDomainProfile: MssqlVirtualMachineGroupWsfcDomainProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

wsfc_domain_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#wsfc_domain_profile MssqlVirtualMachineGroup#wsfc_domain_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlVirtualMachineGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#timeouts MssqlVirtualMachineGroup#timeouts}

---

### MssqlVirtualMachineGroupTimeouts <a name="MssqlVirtualMachineGroupTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.Initializer"></a>

```typescript
import { mssqlVirtualMachineGroup } from '@cdktf/provider-azurerm'

const mssqlVirtualMachineGroupTimeouts: mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#create MssqlVirtualMachineGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#delete MssqlVirtualMachineGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#read MssqlVirtualMachineGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#update MssqlVirtualMachineGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#create MssqlVirtualMachineGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#delete MssqlVirtualMachineGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#read MssqlVirtualMachineGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#update MssqlVirtualMachineGroup#update}.

---

### MssqlVirtualMachineGroupWsfcDomainProfile <a name="MssqlVirtualMachineGroupWsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.Initializer"></a>

```typescript
import { mssqlVirtualMachineGroup } from '@cdktf/provider-azurerm'

const mssqlVirtualMachineGroupWsfcDomainProfile: mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterSubnetType">clusterSubnetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#cluster_subnet_type MssqlVirtualMachineGroup#cluster_subnet_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.fqdn">fqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#fqdn MssqlVirtualMachineGroup#fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterBootstrapAccountName">clusterBootstrapAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#cluster_bootstrap_account_name MssqlVirtualMachineGroup#cluster_bootstrap_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterOperatorAccountName">clusterOperatorAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#cluster_operator_account_name MssqlVirtualMachineGroup#cluster_operator_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.organizationalUnitPath">organizationalUnitPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#organizational_unit_path MssqlVirtualMachineGroup#organizational_unit_path}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.sqlServiceAccountName">sqlServiceAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#sql_service_account_name MssqlVirtualMachineGroup#sql_service_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountPrimaryKey">storageAccountPrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#storage_account_primary_key MssqlVirtualMachineGroup#storage_account_primary_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#storage_account_url MssqlVirtualMachineGroup#storage_account_url}. |

---

##### `clusterSubnetType`<sup>Required</sup> <a name="clusterSubnetType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterSubnetType"></a>

```typescript
public readonly clusterSubnetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#cluster_subnet_type MssqlVirtualMachineGroup#cluster_subnet_type}.

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#fqdn MssqlVirtualMachineGroup#fqdn}.

---

##### `clusterBootstrapAccountName`<sup>Optional</sup> <a name="clusterBootstrapAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterBootstrapAccountName"></a>

```typescript
public readonly clusterBootstrapAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#cluster_bootstrap_account_name MssqlVirtualMachineGroup#cluster_bootstrap_account_name}.

---

##### `clusterOperatorAccountName`<sup>Optional</sup> <a name="clusterOperatorAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterOperatorAccountName"></a>

```typescript
public readonly clusterOperatorAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#cluster_operator_account_name MssqlVirtualMachineGroup#cluster_operator_account_name}.

---

##### `organizationalUnitPath`<sup>Optional</sup> <a name="organizationalUnitPath" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.organizationalUnitPath"></a>

```typescript
public readonly organizationalUnitPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#organizational_unit_path MssqlVirtualMachineGroup#organizational_unit_path}.

---

##### `sqlServiceAccountName`<sup>Optional</sup> <a name="sqlServiceAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.sqlServiceAccountName"></a>

```typescript
public readonly sqlServiceAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#sql_service_account_name MssqlVirtualMachineGroup#sql_service_account_name}.

---

##### `storageAccountPrimaryKey`<sup>Optional</sup> <a name="storageAccountPrimaryKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountPrimaryKey"></a>

```typescript
public readonly storageAccountPrimaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#storage_account_primary_key MssqlVirtualMachineGroup#storage_account_primary_key}.

---

##### `storageAccountUrl`<sup>Optional</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/mssql_virtual_machine_group#storage_account_url MssqlVirtualMachineGroup#storage_account_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlVirtualMachineGroupTimeoutsOutputReference <a name="MssqlVirtualMachineGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlVirtualMachineGroup } from '@cdktf/provider-azurerm'

new mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlVirtualMachineGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

---


### MssqlVirtualMachineGroupWsfcDomainProfileOutputReference <a name="MssqlVirtualMachineGroupWsfcDomainProfileOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer"></a>

```typescript
import { mssqlVirtualMachineGroup } from '@cdktf/provider-azurerm'

new mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterBootstrapAccountName">resetClusterBootstrapAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterOperatorAccountName">resetClusterOperatorAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetOrganizationalUnitPath">resetOrganizationalUnitPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetSqlServiceAccountName">resetSqlServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountPrimaryKey">resetStorageAccountPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountUrl">resetStorageAccountUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterBootstrapAccountName` <a name="resetClusterBootstrapAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterBootstrapAccountName"></a>

```typescript
public resetClusterBootstrapAccountName(): void
```

##### `resetClusterOperatorAccountName` <a name="resetClusterOperatorAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterOperatorAccountName"></a>

```typescript
public resetClusterOperatorAccountName(): void
```

##### `resetOrganizationalUnitPath` <a name="resetOrganizationalUnitPath" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetOrganizationalUnitPath"></a>

```typescript
public resetOrganizationalUnitPath(): void
```

##### `resetSqlServiceAccountName` <a name="resetSqlServiceAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetSqlServiceAccountName"></a>

```typescript
public resetSqlServiceAccountName(): void
```

##### `resetStorageAccountPrimaryKey` <a name="resetStorageAccountPrimaryKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountPrimaryKey"></a>

```typescript
public resetStorageAccountPrimaryKey(): void
```

##### `resetStorageAccountUrl` <a name="resetStorageAccountUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountUrl"></a>

```typescript
public resetStorageAccountUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountNameInput">clusterBootstrapAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountNameInput">clusterOperatorAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetTypeInput">clusterSubnetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPathInput">organizationalUnitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountNameInput">sqlServiceAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKeyInput">storageAccountPrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrlInput">storageAccountUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountName">clusterBootstrapAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountName">clusterOperatorAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetType">clusterSubnetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPath">organizationalUnitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountName">sqlServiceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKey">storageAccountPrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterBootstrapAccountNameInput`<sup>Optional</sup> <a name="clusterBootstrapAccountNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountNameInput"></a>

```typescript
public readonly clusterBootstrapAccountNameInput: string;
```

- *Type:* string

---

##### `clusterOperatorAccountNameInput`<sup>Optional</sup> <a name="clusterOperatorAccountNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountNameInput"></a>

```typescript
public readonly clusterOperatorAccountNameInput: string;
```

- *Type:* string

---

##### `clusterSubnetTypeInput`<sup>Optional</sup> <a name="clusterSubnetTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetTypeInput"></a>

```typescript
public readonly clusterSubnetTypeInput: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `organizationalUnitPathInput`<sup>Optional</sup> <a name="organizationalUnitPathInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPathInput"></a>

```typescript
public readonly organizationalUnitPathInput: string;
```

- *Type:* string

---

##### `sqlServiceAccountNameInput`<sup>Optional</sup> <a name="sqlServiceAccountNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountNameInput"></a>

```typescript
public readonly sqlServiceAccountNameInput: string;
```

- *Type:* string

---

##### `storageAccountPrimaryKeyInput`<sup>Optional</sup> <a name="storageAccountPrimaryKeyInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKeyInput"></a>

```typescript
public readonly storageAccountPrimaryKeyInput: string;
```

- *Type:* string

---

##### `storageAccountUrlInput`<sup>Optional</sup> <a name="storageAccountUrlInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrlInput"></a>

```typescript
public readonly storageAccountUrlInput: string;
```

- *Type:* string

---

##### `clusterBootstrapAccountName`<sup>Required</sup> <a name="clusterBootstrapAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountName"></a>

```typescript
public readonly clusterBootstrapAccountName: string;
```

- *Type:* string

---

##### `clusterOperatorAccountName`<sup>Required</sup> <a name="clusterOperatorAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountName"></a>

```typescript
public readonly clusterOperatorAccountName: string;
```

- *Type:* string

---

##### `clusterSubnetType`<sup>Required</sup> <a name="clusterSubnetType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetType"></a>

```typescript
public readonly clusterSubnetType: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `organizationalUnitPath`<sup>Required</sup> <a name="organizationalUnitPath" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPath"></a>

```typescript
public readonly organizationalUnitPath: string;
```

- *Type:* string

---

##### `sqlServiceAccountName`<sup>Required</sup> <a name="sqlServiceAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountName"></a>

```typescript
public readonly sqlServiceAccountName: string;
```

- *Type:* string

---

##### `storageAccountPrimaryKey`<sup>Required</sup> <a name="storageAccountPrimaryKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKey"></a>

```typescript
public readonly storageAccountPrimaryKey: string;
```

- *Type:* string

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlVirtualMachineGroupWsfcDomainProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---



