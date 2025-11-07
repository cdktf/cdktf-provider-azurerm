# `managedRedis` Submodule <a name="`managedRedis` Submodule" id="@cdktf/provider-azurerm.managedRedis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedRedis <a name="ManagedRedis" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis azurerm_managed_redis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

new managedRedis.ManagedRedis(scope: Construct, id: string, config: ManagedRedisConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig">ManagedRedisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig">ManagedRedisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putDefaultDatabase">putDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetDefaultDatabase">resetDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetHighAvailabilityEnabled">resetHighAvailabilityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putCustomerManagedKey"></a>

```typescript
public putCustomerManagedKey(value: ManagedRedisCustomerManagedKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

---

##### `putDefaultDatabase` <a name="putDefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putDefaultDatabase"></a>

```typescript
public putDefaultDatabase(value: ManagedRedisDefaultDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putDefaultDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putIdentity"></a>

```typescript
public putIdentity(value: ManagedRedisIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagedRedisTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

---

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDefaultDatabase` <a name="resetDefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetDefaultDatabase"></a>

```typescript
public resetDefaultDatabase(): void
```

##### `resetHighAvailabilityEnabled` <a name="resetHighAvailabilityEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetHighAvailabilityEnabled"></a>

```typescript
public resetHighAvailabilityEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedRedis resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isConstruct"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

managedRedis.ManagedRedis.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformElement"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

managedRedis.ManagedRedis.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformResource"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

managedRedis.ManagedRedis.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

managedRedis.ManagedRedis.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedRedis resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedRedis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedRedis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedRedis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference">ManagedRedisCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabase">defaultDatabase</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference">ManagedRedisDefaultDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference">ManagedRedisIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference">ManagedRedisTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabaseInput">defaultDatabaseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabledInput">highAvailabilityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabled">highAvailabilityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: ManagedRedisCustomerManagedKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference">ManagedRedisCustomerManagedKeyOutputReference</a>

---

##### `defaultDatabase`<sup>Required</sup> <a name="defaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabase"></a>

```typescript
public readonly defaultDatabase: ManagedRedisDefaultDatabaseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference">ManagedRedisDefaultDatabaseOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identity"></a>

```typescript
public readonly identity: ManagedRedisIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference">ManagedRedisIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedRedisTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference">ManagedRedisTimeoutsOutputReference</a>

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: ManagedRedisCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

---

##### `defaultDatabaseInput`<sup>Optional</sup> <a name="defaultDatabaseInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabaseInput"></a>

```typescript
public readonly defaultDatabaseInput: ManagedRedisDefaultDatabase;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

---

##### `highAvailabilityEnabledInput`<sup>Optional</sup> <a name="highAvailabilityEnabledInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabledInput"></a>

```typescript
public readonly highAvailabilityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identityInput"></a>

```typescript
public readonly identityInput: ManagedRedisIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagedRedisTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

---

##### `highAvailabilityEnabled`<sup>Required</sup> <a name="highAvailabilityEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabled"></a>

```typescript
public readonly highAvailabilityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedRedisConfig <a name="ManagedRedisConfig" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

const managedRedisConfig: managedRedis.ManagedRedisConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#location ManagedRedis#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#name ManagedRedis#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#resource_group_name ManagedRedis#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#sku_name ManagedRedis#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.defaultDatabase">defaultDatabase</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a></code> | default_database block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.highAvailabilityEnabled">highAvailabilityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#high_availability_enabled ManagedRedis#high_availability_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#id ManagedRedis#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#tags ManagedRedis#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#location ManagedRedis#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#name ManagedRedis#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#resource_group_name ManagedRedis#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#sku_name ManagedRedis#sku_name}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: ManagedRedisCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#customer_managed_key ManagedRedis#customer_managed_key}

---

##### `defaultDatabase`<sup>Optional</sup> <a name="defaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.defaultDatabase"></a>

```typescript
public readonly defaultDatabase: ManagedRedisDefaultDatabase;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

default_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#default_database ManagedRedis#default_database}

---

##### `highAvailabilityEnabled`<sup>Optional</sup> <a name="highAvailabilityEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.highAvailabilityEnabled"></a>

```typescript
public readonly highAvailabilityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#high_availability_enabled ManagedRedis#high_availability_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#id ManagedRedis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.identity"></a>

```typescript
public readonly identity: ManagedRedisIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#identity ManagedRedis#identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#tags ManagedRedis#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedRedisTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#timeouts ManagedRedis#timeouts}

---

### ManagedRedisCustomerManagedKey <a name="ManagedRedisCustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

const managedRedisCustomerManagedKey: managedRedis.ManagedRedisCustomerManagedKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#key_vault_key_id ManagedRedis#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#user_assigned_identity_id ManagedRedis#user_assigned_identity_id}. |

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#key_vault_key_id ManagedRedis#key_vault_key_id}.

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#user_assigned_identity_id ManagedRedis#user_assigned_identity_id}.

---

### ManagedRedisDefaultDatabase <a name="ManagedRedisDefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

const managedRedisDefaultDatabase: managedRedis.ManagedRedisDefaultDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.accessKeysAuthenticationEnabled">accessKeysAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#access_keys_authentication_enabled ManagedRedis#access_keys_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clientProtocol">clientProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#client_protocol ManagedRedis#client_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clusteringPolicy">clusteringPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#clustering_policy ManagedRedis#clustering_policy}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#eviction_policy ManagedRedis#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.geoReplicationGroupName">geoReplicationGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#geo_replication_group_name ManagedRedis#geo_replication_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.module">module</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>[]</code> | module block. |

---

##### `accessKeysAuthenticationEnabled`<sup>Optional</sup> <a name="accessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.accessKeysAuthenticationEnabled"></a>

```typescript
public readonly accessKeysAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#access_keys_authentication_enabled ManagedRedis#access_keys_authentication_enabled}.

---

##### `clientProtocol`<sup>Optional</sup> <a name="clientProtocol" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clientProtocol"></a>

```typescript
public readonly clientProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#client_protocol ManagedRedis#client_protocol}.

---

##### `clusteringPolicy`<sup>Optional</sup> <a name="clusteringPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clusteringPolicy"></a>

```typescript
public readonly clusteringPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#clustering_policy ManagedRedis#clustering_policy}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#eviction_policy ManagedRedis#eviction_policy}.

---

##### `geoReplicationGroupName`<sup>Optional</sup> <a name="geoReplicationGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.geoReplicationGroupName"></a>

```typescript
public readonly geoReplicationGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#geo_replication_group_name ManagedRedis#geo_replication_group_name}.

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.module"></a>

```typescript
public readonly module: IResolvable | ManagedRedisDefaultDatabaseModule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>[]

module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#module ManagedRedis#module}

---

### ManagedRedisDefaultDatabaseModule <a name="ManagedRedisDefaultDatabaseModule" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

const managedRedisDefaultDatabaseModule: managedRedis.ManagedRedisDefaultDatabaseModule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#name ManagedRedis#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.args">args</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#args ManagedRedis#args}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#name ManagedRedis#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#args ManagedRedis#args}.

---

### ManagedRedisIdentity <a name="ManagedRedisIdentity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

const managedRedisIdentity: managedRedis.ManagedRedisIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#type ManagedRedis#type}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#identity_ids ManagedRedis#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#type ManagedRedis#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#identity_ids ManagedRedis#identity_ids}.

---

### ManagedRedisTimeouts <a name="ManagedRedisTimeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

const managedRedisTimeouts: managedRedis.ManagedRedisTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#create ManagedRedis#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#delete ManagedRedis#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#read ManagedRedis#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#update ManagedRedis#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#create ManagedRedis#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#delete ManagedRedis#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#read ManagedRedis#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#update ManagedRedis#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedRedisCustomerManagedKeyOutputReference <a name="ManagedRedisCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

new managedRedis.ManagedRedisCustomerManagedKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedRedisCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

---


### ManagedRedisDefaultDatabaseModuleList <a name="ManagedRedisDefaultDatabaseModuleList" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

new managedRedis.ManagedRedisDefaultDatabaseModuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.get"></a>

```typescript
public get(index: number): ManagedRedisDefaultDatabaseModuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedRedisDefaultDatabaseModule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>[]

---


### ManagedRedisDefaultDatabaseModuleOutputReference <a name="ManagedRedisDefaultDatabaseModuleOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

new managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.argsInput">argsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.args">args</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedRedisDefaultDatabaseModule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>

---


### ManagedRedisDefaultDatabaseOutputReference <a name="ManagedRedisDefaultDatabaseOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

new managedRedis.ManagedRedisDefaultDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.putModule">putModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetAccessKeysAuthenticationEnabled">resetAccessKeysAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClientProtocol">resetClientProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClusteringPolicy">resetClusteringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetEvictionPolicy">resetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetGeoReplicationGroupName">resetGeoReplicationGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetModule">resetModule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModule` <a name="putModule" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.putModule"></a>

```typescript
public putModule(value: IResolvable | ManagedRedisDefaultDatabaseModule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.putModule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>[]

---

##### `resetAccessKeysAuthenticationEnabled` <a name="resetAccessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetAccessKeysAuthenticationEnabled"></a>

```typescript
public resetAccessKeysAuthenticationEnabled(): void
```

##### `resetClientProtocol` <a name="resetClientProtocol" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClientProtocol"></a>

```typescript
public resetClientProtocol(): void
```

##### `resetClusteringPolicy` <a name="resetClusteringPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClusteringPolicy"></a>

```typescript
public resetClusteringPolicy(): void
```

##### `resetEvictionPolicy` <a name="resetEvictionPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetEvictionPolicy"></a>

```typescript
public resetEvictionPolicy(): void
```

##### `resetGeoReplicationGroupName` <a name="resetGeoReplicationGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetGeoReplicationGroupName"></a>

```typescript
public resetGeoReplicationGroupName(): void
```

##### `resetModule` <a name="resetModule" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetModule"></a>

```typescript
public resetModule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.module">module</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList">ManagedRedisDefaultDatabaseModuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabledInput">accessKeysAuthenticationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocolInput">clientProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicyInput">clusteringPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupNameInput">geoReplicationGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.moduleInput">moduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabled">accessKeysAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocol">clientProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicy">clusteringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupName">geoReplicationGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.module"></a>

```typescript
public readonly module: ManagedRedisDefaultDatabaseModuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList">ManagedRedisDefaultDatabaseModuleList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `accessKeysAuthenticationEnabledInput`<sup>Optional</sup> <a name="accessKeysAuthenticationEnabledInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabledInput"></a>

```typescript
public readonly accessKeysAuthenticationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientProtocolInput`<sup>Optional</sup> <a name="clientProtocolInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocolInput"></a>

```typescript
public readonly clientProtocolInput: string;
```

- *Type:* string

---

##### `clusteringPolicyInput`<sup>Optional</sup> <a name="clusteringPolicyInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicyInput"></a>

```typescript
public readonly clusteringPolicyInput: string;
```

- *Type:* string

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicyInput"></a>

```typescript
public readonly evictionPolicyInput: string;
```

- *Type:* string

---

##### `geoReplicationGroupNameInput`<sup>Optional</sup> <a name="geoReplicationGroupNameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupNameInput"></a>

```typescript
public readonly geoReplicationGroupNameInput: string;
```

- *Type:* string

---

##### `moduleInput`<sup>Optional</sup> <a name="moduleInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.moduleInput"></a>

```typescript
public readonly moduleInput: IResolvable | ManagedRedisDefaultDatabaseModule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>[]

---

##### `accessKeysAuthenticationEnabled`<sup>Required</sup> <a name="accessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabled"></a>

```typescript
public readonly accessKeysAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientProtocol`<sup>Required</sup> <a name="clientProtocol" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocol"></a>

```typescript
public readonly clientProtocol: string;
```

- *Type:* string

---

##### `clusteringPolicy`<sup>Required</sup> <a name="clusteringPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicy"></a>

```typescript
public readonly clusteringPolicy: string;
```

- *Type:* string

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

---

##### `geoReplicationGroupName`<sup>Required</sup> <a name="geoReplicationGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupName"></a>

```typescript
public readonly geoReplicationGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedRedisDefaultDatabase;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

---


### ManagedRedisIdentityOutputReference <a name="ManagedRedisIdentityOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

new managedRedis.ManagedRedisIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedRedisIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

---


### ManagedRedisTimeoutsOutputReference <a name="ManagedRedisTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer"></a>

```typescript
import { managedRedis } from '@cdktf/provider-azurerm'

new managedRedis.ManagedRedisTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedRedisTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

---



