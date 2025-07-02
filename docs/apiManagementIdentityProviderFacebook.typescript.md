# `apiManagementIdentityProviderFacebook` Submodule <a name="`apiManagementIdentityProviderFacebook` Submodule" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementIdentityProviderFacebook <a name="ApiManagementIdentityProviderFacebook" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook azurerm_api_management_identity_provider_facebook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer"></a>

```typescript
import { apiManagementIdentityProviderFacebook } from '@cdktf/provider-azurerm'

new apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook(scope: Construct, id: string, config: ApiManagementIdentityProviderFacebookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig">ApiManagementIdentityProviderFacebookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig">ApiManagementIdentityProviderFacebookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementIdentityProviderFacebookTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts">ApiManagementIdentityProviderFacebookTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementIdentityProviderFacebook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isConstruct"></a>

```typescript
import { apiManagementIdentityProviderFacebook } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformElement"></a>

```typescript
import { apiManagementIdentityProviderFacebook } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformResource"></a>

```typescript
import { apiManagementIdentityProviderFacebook } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport"></a>

```typescript
import { apiManagementIdentityProviderFacebook } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementIdentityProviderFacebook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementIdentityProviderFacebook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementIdentityProviderFacebook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementIdentityProviderFacebook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference">ApiManagementIdentityProviderFacebookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appSecretInput">appSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts">ApiManagementIdentityProviderFacebookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appSecret">appSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementIdentityProviderFacebookTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference">ApiManagementIdentityProviderFacebookTimeoutsOutputReference</a>

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.apiManagementNameInput"></a>

```typescript
public readonly apiManagementNameInput: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appSecretInput"></a>

```typescript
public readonly appSecretInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementIdentityProviderFacebookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts">ApiManagementIdentityProviderFacebookTimeouts</a>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementIdentityProviderFacebookConfig <a name="ApiManagementIdentityProviderFacebookConfig" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.Initializer"></a>

```typescript
import { apiManagementIdentityProviderFacebook } from '@cdktf/provider-azurerm'

const apiManagementIdentityProviderFacebookConfig: apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#api_management_name ApiManagementIdentityProviderFacebook#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#app_id ApiManagementIdentityProviderFacebook#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.appSecret">appSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#app_secret ApiManagementIdentityProviderFacebook#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#resource_group_name ApiManagementIdentityProviderFacebook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#id ApiManagementIdentityProviderFacebook#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts">ApiManagementIdentityProviderFacebookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#api_management_name ApiManagementIdentityProviderFacebook#api_management_name}.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#app_id ApiManagementIdentityProviderFacebook#app_id}.

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#app_secret ApiManagementIdentityProviderFacebook#app_secret}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#resource_group_name ApiManagementIdentityProviderFacebook#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#id ApiManagementIdentityProviderFacebook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementIdentityProviderFacebookTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts">ApiManagementIdentityProviderFacebookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#timeouts ApiManagementIdentityProviderFacebook#timeouts}

---

### ApiManagementIdentityProviderFacebookTimeouts <a name="ApiManagementIdentityProviderFacebookTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.Initializer"></a>

```typescript
import { apiManagementIdentityProviderFacebook } from '@cdktf/provider-azurerm'

const apiManagementIdentityProviderFacebookTimeouts: apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#create ApiManagementIdentityProviderFacebook#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#delete ApiManagementIdentityProviderFacebook#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#read ApiManagementIdentityProviderFacebook#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#update ApiManagementIdentityProviderFacebook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#create ApiManagementIdentityProviderFacebook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#delete ApiManagementIdentityProviderFacebook#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#read ApiManagementIdentityProviderFacebook#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/api_management_identity_provider_facebook#update ApiManagementIdentityProviderFacebook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementIdentityProviderFacebookTimeoutsOutputReference <a name="ApiManagementIdentityProviderFacebookTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementIdentityProviderFacebook } from '@cdktf/provider-azurerm'

new apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts">ApiManagementIdentityProviderFacebookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementIdentityProviderFacebookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts">ApiManagementIdentityProviderFacebookTimeouts</a>

---



