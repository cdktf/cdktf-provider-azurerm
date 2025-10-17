# `dataFactoryCustomerManagedKey` Submodule <a name="`dataFactoryCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryCustomerManagedKey <a name="DataFactoryCustomerManagedKey" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key azurerm_data_factory_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.Initializer"></a>

```typescript
import { dataFactoryCustomerManagedKey } from '@cdktf/provider-azurerm'

new dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey(scope: Construct, id: string, config: DataFactoryCustomerManagedKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig">DataFactoryCustomerManagedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig">DataFactoryCustomerManagedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryCustomerManagedKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts">DataFactoryCustomerManagedKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.resetUserAssignedIdentityId"></a>

```typescript
public resetUserAssignedIdentityId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryCustomerManagedKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isConstruct"></a>

```typescript
import { dataFactoryCustomerManagedKey } from '@cdktf/provider-azurerm'

dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isTerraformElement"></a>

```typescript
import { dataFactoryCustomerManagedKey } from '@cdktf/provider-azurerm'

dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isTerraformResource"></a>

```typescript
import { dataFactoryCustomerManagedKey } from '@cdktf/provider-azurerm'

dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.generateConfigForImport"></a>

```typescript
import { dataFactoryCustomerManagedKey } from '@cdktf/provider-azurerm'

dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataFactoryCustomerManagedKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryCustomerManagedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryCustomerManagedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryCustomerManagedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference">DataFactoryCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.customerManagedKeyIdInput">customerManagedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts">DataFactoryCustomerManagedKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryCustomerManagedKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference">DataFactoryCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `customerManagedKeyIdInput`<sup>Optional</sup> <a name="customerManagedKeyIdInput" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.customerManagedKeyIdInput"></a>

```typescript
public readonly customerManagedKeyIdInput: string;
```

- *Type:* string

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryCustomerManagedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts">DataFactoryCustomerManagedKeyTimeouts</a>

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `customerManagedKeyId`<sup>Required</sup> <a name="customerManagedKeyId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.customerManagedKeyId"></a>

```typescript
public readonly customerManagedKeyId: string;
```

- *Type:* string

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryCustomerManagedKeyConfig <a name="DataFactoryCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.Initializer"></a>

```typescript
import { dataFactoryCustomerManagedKey } from '@cdktf/provider-azurerm'

const dataFactoryCustomerManagedKeyConfig: dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#customer_managed_key_id DataFactoryCustomerManagedKey#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#data_factory_id DataFactoryCustomerManagedKey#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#id DataFactoryCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts">DataFactoryCustomerManagedKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#user_assigned_identity_id DataFactoryCustomerManagedKey#user_assigned_identity_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerManagedKeyId`<sup>Required</sup> <a name="customerManagedKeyId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.customerManagedKeyId"></a>

```typescript
public readonly customerManagedKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#customer_managed_key_id DataFactoryCustomerManagedKey#customer_managed_key_id}.

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#data_factory_id DataFactoryCustomerManagedKey#data_factory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#id DataFactoryCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryCustomerManagedKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts">DataFactoryCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#timeouts DataFactoryCustomerManagedKey#timeouts}

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyConfig.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#user_assigned_identity_id DataFactoryCustomerManagedKey#user_assigned_identity_id}.

---

### DataFactoryCustomerManagedKeyTimeouts <a name="DataFactoryCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts.Initializer"></a>

```typescript
import { dataFactoryCustomerManagedKey } from '@cdktf/provider-azurerm'

const dataFactoryCustomerManagedKeyTimeouts: dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#create DataFactoryCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#delete DataFactoryCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#read DataFactoryCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#update DataFactoryCustomerManagedKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#create DataFactoryCustomerManagedKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#delete DataFactoryCustomerManagedKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#read DataFactoryCustomerManagedKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_factory_customer_managed_key#update DataFactoryCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryCustomerManagedKeyTimeoutsOutputReference <a name="DataFactoryCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryCustomerManagedKey } from '@cdktf/provider-azurerm'

new dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts">DataFactoryCustomerManagedKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryCustomerManagedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryCustomerManagedKey.DataFactoryCustomerManagedKeyTimeouts">DataFactoryCustomerManagedKeyTimeouts</a>

---



