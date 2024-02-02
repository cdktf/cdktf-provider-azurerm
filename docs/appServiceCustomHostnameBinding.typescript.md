# `appServiceCustomHostnameBinding` Submodule <a name="`appServiceCustomHostnameBinding` Submodule" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceCustomHostnameBinding <a name="AppServiceCustomHostnameBinding" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding azurerm_app_service_custom_hostname_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer"></a>

```typescript
import { appServiceCustomHostnameBinding } from '@cdktf/provider-azurerm'

new appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding(scope: Construct, id: string, config: AppServiceCustomHostnameBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig">AppServiceCustomHostnameBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig">AppServiceCustomHostnameBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetSslState">resetSslState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetThumbprint">resetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceCustomHostnameBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSslState` <a name="resetSslState" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetSslState"></a>

```typescript
public resetSslState(): void
```

##### `resetThumbprint` <a name="resetThumbprint" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetThumbprint"></a>

```typescript
public resetThumbprint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceCustomHostnameBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct"></a>

```typescript
import { appServiceCustomHostnameBinding } from '@cdktf/provider-azurerm'

appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement"></a>

```typescript
import { appServiceCustomHostnameBinding } from '@cdktf/provider-azurerm'

appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource"></a>

```typescript
import { appServiceCustomHostnameBinding } from '@cdktf/provider-azurerm'

appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport"></a>

```typescript
import { appServiceCustomHostnameBinding } from '@cdktf/provider-azurerm'

appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppServiceCustomHostnameBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppServiceCustomHostnameBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppServiceCustomHostnameBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceCustomHostnameBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference">AppServiceCustomHostnameBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.virtualIp">virtualIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceNameInput">appServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslStateInput">sslStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprintInput">thumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceName">appServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslState">sslState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceCustomHostnameBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference">AppServiceCustomHostnameBindingTimeoutsOutputReference</a>

---

##### `virtualIp`<sup>Required</sup> <a name="virtualIp" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.virtualIp"></a>

```typescript
public readonly virtualIp: string;
```

- *Type:* string

---

##### `appServiceNameInput`<sup>Optional</sup> <a name="appServiceNameInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceNameInput"></a>

```typescript
public readonly appServiceNameInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sslStateInput`<sup>Optional</sup> <a name="sslStateInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslStateInput"></a>

```typescript
public readonly sslStateInput: string;
```

- *Type:* string

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprintInput"></a>

```typescript
public readonly thumbprintInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppServiceCustomHostnameBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

---

##### `appServiceName`<sup>Required</sup> <a name="appServiceName" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceName"></a>

```typescript
public readonly appServiceName: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sslState`<sup>Required</sup> <a name="sslState" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslState"></a>

```typescript
public readonly sslState: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceCustomHostnameBindingConfig <a name="AppServiceCustomHostnameBindingConfig" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.Initializer"></a>

```typescript
import { appServiceCustomHostnameBinding } from '@cdktf/provider-azurerm'

const appServiceCustomHostnameBindingConfig: appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.appServiceName">appServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.sslState">sslState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.thumbprint">thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appServiceName`<sup>Required</sup> <a name="appServiceName" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.appServiceName"></a>

```typescript
public readonly appServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sslState`<sup>Optional</sup> <a name="sslState" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.sslState"></a>

```typescript
public readonly sslState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}.

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceCustomHostnameBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#timeouts AppServiceCustomHostnameBinding#timeouts}

---

### AppServiceCustomHostnameBindingTimeouts <a name="AppServiceCustomHostnameBindingTimeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.Initializer"></a>

```typescript
import { appServiceCustomHostnameBinding } from '@cdktf/provider-azurerm'

const appServiceCustomHostnameBindingTimeouts: appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#create AppServiceCustomHostnameBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#delete AppServiceCustomHostnameBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#read AppServiceCustomHostnameBinding#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#create AppServiceCustomHostnameBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#delete AppServiceCustomHostnameBinding#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_custom_hostname_binding#read AppServiceCustomHostnameBinding#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceCustomHostnameBindingTimeoutsOutputReference <a name="AppServiceCustomHostnameBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { appServiceCustomHostnameBinding } from '@cdktf/provider-azurerm'

new appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceCustomHostnameBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

---



