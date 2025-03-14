# `apiManagementIdentityProviderAad` Submodule <a name="`apiManagementIdentityProviderAad` Submodule" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementIdentityProviderAad <a name="ApiManagementIdentityProviderAad" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad azurerm_api_management_identity_provider_aad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.Initializer"></a>

```typescript
import { apiManagementIdentityProviderAad } from '@cdktf/provider-azurerm'

new apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad(scope: Construct, id: string, config: ApiManagementIdentityProviderAadConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig">ApiManagementIdentityProviderAadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig">ApiManagementIdentityProviderAadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.resetClientLibrary">resetClientLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.resetSigninTenant">resetSigninTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementIdentityProviderAadTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts">ApiManagementIdentityProviderAadTimeouts</a>

---

##### `resetClientLibrary` <a name="resetClientLibrary" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.resetClientLibrary"></a>

```typescript
public resetClientLibrary(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSigninTenant` <a name="resetSigninTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.resetSigninTenant"></a>

```typescript
public resetSigninTenant(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementIdentityProviderAad resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isConstruct"></a>

```typescript
import { apiManagementIdentityProviderAad } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isTerraformElement"></a>

```typescript
import { apiManagementIdentityProviderAad } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isTerraformResource"></a>

```typescript
import { apiManagementIdentityProviderAad } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.generateConfigForImport"></a>

```typescript
import { apiManagementIdentityProviderAad } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementIdentityProviderAad resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementIdentityProviderAad to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementIdentityProviderAad that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementIdentityProviderAad to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference">ApiManagementIdentityProviderAadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.allowedTenantsInput">allowedTenantsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientLibraryInput">clientLibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.signinTenantInput">signinTenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts">ApiManagementIdentityProviderAadTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.allowedTenants">allowedTenants</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientLibrary">clientLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.signinTenant">signinTenant</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementIdentityProviderAadTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference">ApiManagementIdentityProviderAadTimeoutsOutputReference</a>

---

##### `allowedTenantsInput`<sup>Optional</sup> <a name="allowedTenantsInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.allowedTenantsInput"></a>

```typescript
public readonly allowedTenantsInput: string[];
```

- *Type:* string[]

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.apiManagementNameInput"></a>

```typescript
public readonly apiManagementNameInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientLibraryInput`<sup>Optional</sup> <a name="clientLibraryInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientLibraryInput"></a>

```typescript
public readonly clientLibraryInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `signinTenantInput`<sup>Optional</sup> <a name="signinTenantInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.signinTenantInput"></a>

```typescript
public readonly signinTenantInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementIdentityProviderAadTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts">ApiManagementIdentityProviderAadTimeouts</a>

---

##### `allowedTenants`<sup>Required</sup> <a name="allowedTenants" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.allowedTenants"></a>

```typescript
public readonly allowedTenants: string[];
```

- *Type:* string[]

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientLibrary`<sup>Required</sup> <a name="clientLibrary" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientLibrary"></a>

```typescript
public readonly clientLibrary: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `signinTenant`<sup>Required</sup> <a name="signinTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.signinTenant"></a>

```typescript
public readonly signinTenant: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAad.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementIdentityProviderAadConfig <a name="ApiManagementIdentityProviderAadConfig" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.Initializer"></a>

```typescript
import { apiManagementIdentityProviderAad } from '@cdktf/provider-azurerm'

const apiManagementIdentityProviderAadConfig: apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.allowedTenants">allowedTenants</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#allowed_tenants ApiManagementIdentityProviderAad#allowed_tenants}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#api_management_name ApiManagementIdentityProviderAad#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#client_id ApiManagementIdentityProviderAad#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#client_secret ApiManagementIdentityProviderAad#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#resource_group_name ApiManagementIdentityProviderAad#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.clientLibrary">clientLibrary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#client_library ApiManagementIdentityProviderAad#client_library}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#id ApiManagementIdentityProviderAad#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.signinTenant">signinTenant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#signin_tenant ApiManagementIdentityProviderAad#signin_tenant}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts">ApiManagementIdentityProviderAadTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedTenants`<sup>Required</sup> <a name="allowedTenants" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.allowedTenants"></a>

```typescript
public readonly allowedTenants: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#allowed_tenants ApiManagementIdentityProviderAad#allowed_tenants}.

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#api_management_name ApiManagementIdentityProviderAad#api_management_name}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#client_id ApiManagementIdentityProviderAad#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#client_secret ApiManagementIdentityProviderAad#client_secret}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#resource_group_name ApiManagementIdentityProviderAad#resource_group_name}.

---

##### `clientLibrary`<sup>Optional</sup> <a name="clientLibrary" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.clientLibrary"></a>

```typescript
public readonly clientLibrary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#client_library ApiManagementIdentityProviderAad#client_library}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#id ApiManagementIdentityProviderAad#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `signinTenant`<sup>Optional</sup> <a name="signinTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.signinTenant"></a>

```typescript
public readonly signinTenant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#signin_tenant ApiManagementIdentityProviderAad#signin_tenant}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementIdentityProviderAadTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts">ApiManagementIdentityProviderAadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#timeouts ApiManagementIdentityProviderAad#timeouts}

---

### ApiManagementIdentityProviderAadTimeouts <a name="ApiManagementIdentityProviderAadTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts.Initializer"></a>

```typescript
import { apiManagementIdentityProviderAad } from '@cdktf/provider-azurerm'

const apiManagementIdentityProviderAadTimeouts: apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#create ApiManagementIdentityProviderAad#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#delete ApiManagementIdentityProviderAad#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#read ApiManagementIdentityProviderAad#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#update ApiManagementIdentityProviderAad#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#create ApiManagementIdentityProviderAad#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#delete ApiManagementIdentityProviderAad#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#read ApiManagementIdentityProviderAad#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/api_management_identity_provider_aad#update ApiManagementIdentityProviderAad#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementIdentityProviderAadTimeoutsOutputReference <a name="ApiManagementIdentityProviderAadTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementIdentityProviderAad } from '@cdktf/provider-azurerm'

new apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts">ApiManagementIdentityProviderAadTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementIdentityProviderAadTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAad.ApiManagementIdentityProviderAadTimeouts">ApiManagementIdentityProviderAadTimeouts</a>

---



