# `iothubDpsSharedAccessPolicy` Submodule <a name="`iothubDpsSharedAccessPolicy` Submodule" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubDpsSharedAccessPolicy <a name="IothubDpsSharedAccessPolicy" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy azurerm_iothub_dps_shared_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer"></a>

```typescript
import { iothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

new iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy(scope: Construct, id: string, config: IothubDpsSharedAccessPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig">IothubDpsSharedAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig">IothubDpsSharedAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetEnrollmentRead">resetEnrollmentRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetEnrollmentWrite">resetEnrollmentWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetRegistrationRead">resetRegistrationRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetRegistrationWrite">resetRegistrationWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetServiceConfig">resetServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: IothubDpsSharedAccessPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a>

---

##### `resetEnrollmentRead` <a name="resetEnrollmentRead" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetEnrollmentRead"></a>

```typescript
public resetEnrollmentRead(): void
```

##### `resetEnrollmentWrite` <a name="resetEnrollmentWrite" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetEnrollmentWrite"></a>

```typescript
public resetEnrollmentWrite(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegistrationRead` <a name="resetRegistrationRead" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetRegistrationRead"></a>

```typescript
public resetRegistrationRead(): void
```

##### `resetRegistrationWrite` <a name="resetRegistrationWrite" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetRegistrationWrite"></a>

```typescript
public resetRegistrationWrite(): void
```

##### `resetServiceConfig` <a name="resetServiceConfig" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetServiceConfig"></a>

```typescript
public resetServiceConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IothubDpsSharedAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isConstruct"></a>

```typescript
import { iothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformElement"></a>

```typescript
import { iothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformResource"></a>

```typescript
import { iothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport"></a>

```typescript
import { iothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IothubDpsSharedAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IothubDpsSharedAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IothubDpsSharedAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IothubDpsSharedAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference">IothubDpsSharedAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentReadInput">enrollmentReadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentWriteInput">enrollmentWriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.iothubDpsNameInput">iothubDpsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationReadInput">registrationReadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationWriteInput">registrationWriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.serviceConfigInput">serviceConfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentRead">enrollmentRead</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentWrite">enrollmentWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.iothubDpsName">iothubDpsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationRead">registrationRead</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationWrite">registrationWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.serviceConfig">serviceConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: IothubDpsSharedAccessPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference">IothubDpsSharedAccessPolicyTimeoutsOutputReference</a>

---

##### `enrollmentReadInput`<sup>Optional</sup> <a name="enrollmentReadInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentReadInput"></a>

```typescript
public readonly enrollmentReadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enrollmentWriteInput`<sup>Optional</sup> <a name="enrollmentWriteInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentWriteInput"></a>

```typescript
public readonly enrollmentWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iothubDpsNameInput`<sup>Optional</sup> <a name="iothubDpsNameInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.iothubDpsNameInput"></a>

```typescript
public readonly iothubDpsNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `registrationReadInput`<sup>Optional</sup> <a name="registrationReadInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationReadInput"></a>

```typescript
public readonly registrationReadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `registrationWriteInput`<sup>Optional</sup> <a name="registrationWriteInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationWriteInput"></a>

```typescript
public readonly registrationWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceConfigInput`<sup>Optional</sup> <a name="serviceConfigInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.serviceConfigInput"></a>

```typescript
public readonly serviceConfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IothubDpsSharedAccessPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a>

---

##### `enrollmentRead`<sup>Required</sup> <a name="enrollmentRead" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentRead"></a>

```typescript
public readonly enrollmentRead: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enrollmentWrite`<sup>Required</sup> <a name="enrollmentWrite" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.enrollmentWrite"></a>

```typescript
public readonly enrollmentWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iothubDpsName`<sup>Required</sup> <a name="iothubDpsName" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.iothubDpsName"></a>

```typescript
public readonly iothubDpsName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `registrationRead`<sup>Required</sup> <a name="registrationRead" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationRead"></a>

```typescript
public readonly registrationRead: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `registrationWrite`<sup>Required</sup> <a name="registrationWrite" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.registrationWrite"></a>

```typescript
public readonly registrationWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubDpsSharedAccessPolicyConfig <a name="IothubDpsSharedAccessPolicyConfig" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.Initializer"></a>

```typescript
import { iothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

const iothubDpsSharedAccessPolicyConfig: iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.iothubDpsName">iothubDpsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#iothub_dps_name IothubDpsSharedAccessPolicy#iothub_dps_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#name IothubDpsSharedAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#resource_group_name IothubDpsSharedAccessPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.enrollmentRead">enrollmentRead</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#enrollment_read IothubDpsSharedAccessPolicy#enrollment_read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.enrollmentWrite">enrollmentWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#enrollment_write IothubDpsSharedAccessPolicy#enrollment_write}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#id IothubDpsSharedAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.registrationRead">registrationRead</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#registration_read IothubDpsSharedAccessPolicy#registration_read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.registrationWrite">registrationWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#registration_write IothubDpsSharedAccessPolicy#registration_write}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.serviceConfig">serviceConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#service_config IothubDpsSharedAccessPolicy#service_config}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iothubDpsName`<sup>Required</sup> <a name="iothubDpsName" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.iothubDpsName"></a>

```typescript
public readonly iothubDpsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#iothub_dps_name IothubDpsSharedAccessPolicy#iothub_dps_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#name IothubDpsSharedAccessPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#resource_group_name IothubDpsSharedAccessPolicy#resource_group_name}.

---

##### `enrollmentRead`<sup>Optional</sup> <a name="enrollmentRead" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.enrollmentRead"></a>

```typescript
public readonly enrollmentRead: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#enrollment_read IothubDpsSharedAccessPolicy#enrollment_read}.

---

##### `enrollmentWrite`<sup>Optional</sup> <a name="enrollmentWrite" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.enrollmentWrite"></a>

```typescript
public readonly enrollmentWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#enrollment_write IothubDpsSharedAccessPolicy#enrollment_write}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#id IothubDpsSharedAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registrationRead`<sup>Optional</sup> <a name="registrationRead" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.registrationRead"></a>

```typescript
public readonly registrationRead: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#registration_read IothubDpsSharedAccessPolicy#registration_read}.

---

##### `registrationWrite`<sup>Optional</sup> <a name="registrationWrite" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.registrationWrite"></a>

```typescript
public readonly registrationWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#registration_write IothubDpsSharedAccessPolicy#registration_write}.

---

##### `serviceConfig`<sup>Optional</sup> <a name="serviceConfig" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#service_config IothubDpsSharedAccessPolicy#service_config}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IothubDpsSharedAccessPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#timeouts IothubDpsSharedAccessPolicy#timeouts}

---

### IothubDpsSharedAccessPolicyTimeouts <a name="IothubDpsSharedAccessPolicyTimeouts" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.Initializer"></a>

```typescript
import { iothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

const iothubDpsSharedAccessPolicyTimeouts: iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#create IothubDpsSharedAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#delete IothubDpsSharedAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#read IothubDpsSharedAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#update IothubDpsSharedAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#create IothubDpsSharedAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#delete IothubDpsSharedAccessPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#read IothubDpsSharedAccessPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_dps_shared_access_policy#update IothubDpsSharedAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubDpsSharedAccessPolicyTimeoutsOutputReference <a name="IothubDpsSharedAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { iothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

new iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IothubDpsSharedAccessPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothubDpsSharedAccessPolicy.IothubDpsSharedAccessPolicyTimeouts">IothubDpsSharedAccessPolicyTimeouts</a>

---



