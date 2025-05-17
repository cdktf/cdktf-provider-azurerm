# `lbBackendAddressPoolAddress` Submodule <a name="`lbBackendAddressPoolAddress` Submodule" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbBackendAddressPoolAddress <a name="LbBackendAddressPoolAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address azurerm_lb_backend_address_pool_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

new lbBackendAddressPoolAddress.LbBackendAddressPoolAddress(scope: Construct, id: string, config: LbBackendAddressPoolAddressConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig">LbBackendAddressPoolAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig">LbBackendAddressPoolAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetBackendAddressIpConfigurationId">resetBackendAddressIpConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts"></a>

```typescript
public putTimeouts(value: LbBackendAddressPoolAddressTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>

---

##### `resetBackendAddressIpConfigurationId` <a name="resetBackendAddressIpConfigurationId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetBackendAddressIpConfigurationId"></a>

```typescript
public resetBackendAddressIpConfigurationId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbBackendAddressPoolAddress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbBackendAddressPoolAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbBackendAddressPoolAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbBackendAddressPoolAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbBackendAddressPoolAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.inboundNatRulePortMapping">inboundNatRulePortMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList">LbBackendAddressPoolAddressInboundNatRulePortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference">LbBackendAddressPoolAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationIdInput">backendAddressIpConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolIdInput">backendAddressPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationId">backendAddressIpConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolId">backendAddressPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `inboundNatRulePortMapping`<sup>Required</sup> <a name="inboundNatRulePortMapping" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.inboundNatRulePortMapping"></a>

```typescript
public readonly inboundNatRulePortMapping: LbBackendAddressPoolAddressInboundNatRulePortMappingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList">LbBackendAddressPoolAddressInboundNatRulePortMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeouts"></a>

```typescript
public readonly timeouts: LbBackendAddressPoolAddressTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference">LbBackendAddressPoolAddressTimeoutsOutputReference</a>

---

##### `backendAddressIpConfigurationIdInput`<sup>Optional</sup> <a name="backendAddressIpConfigurationIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationIdInput"></a>

```typescript
public readonly backendAddressIpConfigurationIdInput: string;
```

- *Type:* string

---

##### `backendAddressPoolIdInput`<sup>Optional</sup> <a name="backendAddressPoolIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolIdInput"></a>

```typescript
public readonly backendAddressPoolIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LbBackendAddressPoolAddressTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `backendAddressIpConfigurationId`<sup>Required</sup> <a name="backendAddressIpConfigurationId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationId"></a>

```typescript
public readonly backendAddressIpConfigurationId: string;
```

- *Type:* string

---

##### `backendAddressPoolId`<sup>Required</sup> <a name="backendAddressPoolId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolId"></a>

```typescript
public readonly backendAddressPoolId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbBackendAddressPoolAddressConfig <a name="LbBackendAddressPoolAddressConfig" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.Initializer"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

const lbBackendAddressPoolAddressConfig: lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressPoolId">backendAddressPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#name LbBackendAddressPoolAddress#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressIpConfigurationId">backendAddressIpConfigurationId</a></code> | <code>string</code> | For global load balancer, user needs to specify the `backend_address_ip_configuration_id` of the added regional load balancers. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#id LbBackendAddressPoolAddress#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#ip_address LbBackendAddressPoolAddress#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#virtual_network_id LbBackendAddressPoolAddress#virtual_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendAddressPoolId`<sup>Required</sup> <a name="backendAddressPoolId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressPoolId"></a>

```typescript
public readonly backendAddressPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#name LbBackendAddressPoolAddress#name}.

---

##### `backendAddressIpConfigurationId`<sup>Optional</sup> <a name="backendAddressIpConfigurationId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressIpConfigurationId"></a>

```typescript
public readonly backendAddressIpConfigurationId: string;
```

- *Type:* string

For global load balancer, user needs to specify the `backend_address_ip_configuration_id` of the added regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#backend_address_ip_configuration_id LbBackendAddressPoolAddress#backend_address_ip_configuration_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#id LbBackendAddressPoolAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#ip_address LbBackendAddressPoolAddress#ip_address}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LbBackendAddressPoolAddressTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#timeouts LbBackendAddressPoolAddress#timeouts}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#virtual_network_id LbBackendAddressPoolAddress#virtual_network_id}.

---

### LbBackendAddressPoolAddressInboundNatRulePortMapping <a name="LbBackendAddressPoolAddressInboundNatRulePortMapping" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping.Initializer"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

const lbBackendAddressPoolAddressInboundNatRulePortMapping: lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping = { ... }
```


### LbBackendAddressPoolAddressTimeouts <a name="LbBackendAddressPoolAddressTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.Initializer"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

const lbBackendAddressPoolAddressTimeouts: lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#create LbBackendAddressPoolAddress#create}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#delete LbBackendAddressPoolAddress#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#read LbBackendAddressPoolAddress#read}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#update LbBackendAddressPoolAddress#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#create LbBackendAddressPoolAddress#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#delete LbBackendAddressPoolAddress#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#read LbBackendAddressPoolAddress#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/lb_backend_address_pool_address#update LbBackendAddressPoolAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbBackendAddressPoolAddressInboundNatRulePortMappingList <a name="LbBackendAddressPoolAddressInboundNatRulePortMappingList" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

new lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get"></a>

```typescript
public get(index: number): LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference <a name="LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

new lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.backendPort">backendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.frontendPort">frontendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName">inboundNatRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping">LbBackendAddressPoolAddressInboundNatRulePortMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.frontendPort"></a>

```typescript
public readonly frontendPort: number;
```

- *Type:* number

---

##### `inboundNatRuleName`<sup>Required</sup> <a name="inboundNatRuleName" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName"></a>

```typescript
public readonly inboundNatRuleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbBackendAddressPoolAddressInboundNatRulePortMapping;
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping">LbBackendAddressPoolAddressInboundNatRulePortMapping</a>

---


### LbBackendAddressPoolAddressTimeoutsOutputReference <a name="LbBackendAddressPoolAddressTimeoutsOutputReference" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer"></a>

```typescript
import { lbBackendAddressPoolAddress } from '@cdktf/provider-azurerm'

new lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbBackendAddressPoolAddressTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>

---



