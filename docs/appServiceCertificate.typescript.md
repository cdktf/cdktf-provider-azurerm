# `appServiceCertificate` Submodule <a name="`appServiceCertificate` Submodule" id="@cdktf/provider-azurerm.appServiceCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceCertificate <a name="AppServiceCertificate" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate azurerm_app_service_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.Initializer"></a>

```typescript
import { appServiceCertificate } from '@cdktf/provider-azurerm'

new appServiceCertificate.AppServiceCertificate(scope: Construct, id: string, config: AppServiceCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig">AppServiceCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig">AppServiceCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetAppServicePlanId">resetAppServicePlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetKeyVaultSecretId">resetKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetPfxBlob">resetPfxBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts">AppServiceCertificateTimeouts</a>

---

##### `resetAppServicePlanId` <a name="resetAppServicePlanId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetAppServicePlanId"></a>

```typescript
public resetAppServicePlanId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetKeyVaultSecretId` <a name="resetKeyVaultSecretId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetKeyVaultSecretId"></a>

```typescript
public resetKeyVaultSecretId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPfxBlob` <a name="resetPfxBlob" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetPfxBlob"></a>

```typescript
public resetPfxBlob(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.isConstruct"></a>

```typescript
import { appServiceCertificate } from '@cdktf/provider-azurerm'

appServiceCertificate.AppServiceCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.isTerraformElement"></a>

```typescript
import { appServiceCertificate } from '@cdktf/provider-azurerm'

appServiceCertificate.AppServiceCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.isTerraformResource"></a>

```typescript
import { appServiceCertificate } from '@cdktf/provider-azurerm'

appServiceCertificate.AppServiceCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.generateConfigForImport"></a>

```typescript
import { appServiceCertificate } from '@cdktf/provider-azurerm'

appServiceCertificate.AppServiceCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppServiceCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppServiceCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppServiceCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.hostingEnvironmentProfileId">hostingEnvironmentProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.hostNames">hostNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.issueDate">issueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.subjectName">subjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference">AppServiceCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.appServicePlanIdInput">appServicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.keyVaultSecretIdInput">keyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.pfxBlobInput">pfxBlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts">AppServiceCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.appServicePlanId">appServicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.keyVaultSecretId">keyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.pfxBlob">pfxBlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `hostingEnvironmentProfileId`<sup>Required</sup> <a name="hostingEnvironmentProfileId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.hostingEnvironmentProfileId"></a>

```typescript
public readonly hostingEnvironmentProfileId: string;
```

- *Type:* string

---

##### `hostNames`<sup>Required</sup> <a name="hostNames" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.hostNames"></a>

```typescript
public readonly hostNames: string[];
```

- *Type:* string[]

---

##### `issueDate`<sup>Required</sup> <a name="issueDate" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.issueDate"></a>

```typescript
public readonly issueDate: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `subjectName`<sup>Required</sup> <a name="subjectName" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.subjectName"></a>

```typescript
public readonly subjectName: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference">AppServiceCertificateTimeoutsOutputReference</a>

---

##### `appServicePlanIdInput`<sup>Optional</sup> <a name="appServicePlanIdInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.appServicePlanIdInput"></a>

```typescript
public readonly appServicePlanIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `keyVaultSecretIdInput`<sup>Optional</sup> <a name="keyVaultSecretIdInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.keyVaultSecretIdInput"></a>

```typescript
public readonly keyVaultSecretIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pfxBlobInput`<sup>Optional</sup> <a name="pfxBlobInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.pfxBlobInput"></a>

```typescript
public readonly pfxBlobInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppServiceCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts">AppServiceCertificateTimeouts</a>

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.appServicePlanId"></a>

```typescript
public readonly appServicePlanId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `keyVaultSecretId`<sup>Required</sup> <a name="keyVaultSecretId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.keyVaultSecretId"></a>

```typescript
public readonly keyVaultSecretId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pfxBlob`<sup>Required</sup> <a name="pfxBlob" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.pfxBlob"></a>

```typescript
public readonly pfxBlob: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceCertificateConfig <a name="AppServiceCertificateConfig" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.Initializer"></a>

```typescript
import { appServiceCertificate } from '@cdktf/provider-azurerm'

const appServiceCertificateConfig: appServiceCertificate.AppServiceCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#location AppServiceCertificate#location}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#name AppServiceCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#resource_group_name AppServiceCertificate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.appServicePlanId">appServicePlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#app_service_plan_id AppServiceCertificate#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#id AppServiceCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#key_vault_id AppServiceCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.keyVaultSecretId">keyVaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#key_vault_secret_id AppServiceCertificate#key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#password AppServiceCertificate#password}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.pfxBlob">pfxBlob</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#pfx_blob AppServiceCertificate#pfx_blob}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#tags AppServiceCertificate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts">AppServiceCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#location AppServiceCertificate#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#name AppServiceCertificate#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#resource_group_name AppServiceCertificate#resource_group_name}.

---

##### `appServicePlanId`<sup>Optional</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.appServicePlanId"></a>

```typescript
public readonly appServicePlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#app_service_plan_id AppServiceCertificate#app_service_plan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#id AppServiceCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#key_vault_id AppServiceCertificate#key_vault_id}.

---

##### `keyVaultSecretId`<sup>Optional</sup> <a name="keyVaultSecretId" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.keyVaultSecretId"></a>

```typescript
public readonly keyVaultSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#key_vault_secret_id AppServiceCertificate#key_vault_secret_id}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#password AppServiceCertificate#password}.

---

##### `pfxBlob`<sup>Optional</sup> <a name="pfxBlob" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.pfxBlob"></a>

```typescript
public readonly pfxBlob: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#pfx_blob AppServiceCertificate#pfx_blob}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#tags AppServiceCertificate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceCertificateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts">AppServiceCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#timeouts AppServiceCertificate#timeouts}

---

### AppServiceCertificateTimeouts <a name="AppServiceCertificateTimeouts" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts.Initializer"></a>

```typescript
import { appServiceCertificate } from '@cdktf/provider-azurerm'

const appServiceCertificateTimeouts: appServiceCertificate.AppServiceCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#create AppServiceCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#delete AppServiceCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#read AppServiceCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#update AppServiceCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#create AppServiceCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#delete AppServiceCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#read AppServiceCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/app_service_certificate#update AppServiceCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceCertificateTimeoutsOutputReference <a name="AppServiceCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { appServiceCertificate } from '@cdktf/provider-azurerm'

new appServiceCertificate.AppServiceCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts">AppServiceCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceCertificate.AppServiceCertificateTimeouts">AppServiceCertificateTimeouts</a>

---



