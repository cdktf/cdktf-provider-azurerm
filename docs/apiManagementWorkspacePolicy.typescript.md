# `apiManagementWorkspacePolicy` Submodule <a name="`apiManagementWorkspacePolicy` Submodule" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementWorkspacePolicy <a name="ApiManagementWorkspacePolicy" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy azurerm_api_management_workspace_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer"></a>

```typescript
import { apiManagementWorkspacePolicy } from '@cdktf/provider-azurerm'

new apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy(scope: Construct, id: string, config: ApiManagementWorkspacePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig">ApiManagementWorkspacePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig">ApiManagementWorkspacePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetXmlContent">resetXmlContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetXmlLink">resetXmlLink</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementWorkspacePolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetXmlContent` <a name="resetXmlContent" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetXmlContent"></a>

```typescript
public resetXmlContent(): void
```

##### `resetXmlLink` <a name="resetXmlLink" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetXmlLink"></a>

```typescript
public resetXmlLink(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementWorkspacePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isConstruct"></a>

```typescript
import { apiManagementWorkspacePolicy } from '@cdktf/provider-azurerm'

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformElement"></a>

```typescript
import { apiManagementWorkspacePolicy } from '@cdktf/provider-azurerm'

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformResource"></a>

```typescript
import { apiManagementWorkspacePolicy } from '@cdktf/provider-azurerm'

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport"></a>

```typescript
import { apiManagementWorkspacePolicy } from '@cdktf/provider-azurerm'

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementWorkspacePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementWorkspacePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementWorkspacePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementWorkspacePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference">ApiManagementWorkspacePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.apiManagementWorkspaceIdInput">apiManagementWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlContentInput">xmlContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlLinkInput">xmlLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.apiManagementWorkspaceId">apiManagementWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlContent">xmlContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlLink">xmlLink</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementWorkspacePolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference">ApiManagementWorkspacePolicyTimeoutsOutputReference</a>

---

##### `apiManagementWorkspaceIdInput`<sup>Optional</sup> <a name="apiManagementWorkspaceIdInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.apiManagementWorkspaceIdInput"></a>

```typescript
public readonly apiManagementWorkspaceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementWorkspacePolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a>

---

##### `xmlContentInput`<sup>Optional</sup> <a name="xmlContentInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlContentInput"></a>

```typescript
public readonly xmlContentInput: string;
```

- *Type:* string

---

##### `xmlLinkInput`<sup>Optional</sup> <a name="xmlLinkInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlLinkInput"></a>

```typescript
public readonly xmlLinkInput: string;
```

- *Type:* string

---

##### `apiManagementWorkspaceId`<sup>Required</sup> <a name="apiManagementWorkspaceId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.apiManagementWorkspaceId"></a>

```typescript
public readonly apiManagementWorkspaceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `xmlContent`<sup>Required</sup> <a name="xmlContent" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlContent"></a>

```typescript
public readonly xmlContent: string;
```

- *Type:* string

---

##### `xmlLink`<sup>Required</sup> <a name="xmlLink" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlLink"></a>

```typescript
public readonly xmlLink: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementWorkspacePolicyConfig <a name="ApiManagementWorkspacePolicyConfig" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.Initializer"></a>

```typescript
import { apiManagementWorkspacePolicy } from '@cdktf/provider-azurerm'

const apiManagementWorkspacePolicyConfig: apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.apiManagementWorkspaceId">apiManagementWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#api_management_workspace_id ApiManagementWorkspacePolicy#api_management_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#id ApiManagementWorkspacePolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.xmlContent">xmlContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_content ApiManagementWorkspacePolicy#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.xmlLink">xmlLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_link ApiManagementWorkspacePolicy#xml_link}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementWorkspaceId`<sup>Required</sup> <a name="apiManagementWorkspaceId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.apiManagementWorkspaceId"></a>

```typescript
public readonly apiManagementWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#api_management_workspace_id ApiManagementWorkspacePolicy#api_management_workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#id ApiManagementWorkspacePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementWorkspacePolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#timeouts ApiManagementWorkspacePolicy#timeouts}

---

##### `xmlContent`<sup>Optional</sup> <a name="xmlContent" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.xmlContent"></a>

```typescript
public readonly xmlContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_content ApiManagementWorkspacePolicy#xml_content}.

---

##### `xmlLink`<sup>Optional</sup> <a name="xmlLink" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.xmlLink"></a>

```typescript
public readonly xmlLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_link ApiManagementWorkspacePolicy#xml_link}.

---

### ApiManagementWorkspacePolicyTimeouts <a name="ApiManagementWorkspacePolicyTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.Initializer"></a>

```typescript
import { apiManagementWorkspacePolicy } from '@cdktf/provider-azurerm'

const apiManagementWorkspacePolicyTimeouts: apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#create ApiManagementWorkspacePolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#delete ApiManagementWorkspacePolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#read ApiManagementWorkspacePolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#update ApiManagementWorkspacePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#create ApiManagementWorkspacePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#delete ApiManagementWorkspacePolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#read ApiManagementWorkspacePolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#update ApiManagementWorkspacePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementWorkspacePolicyTimeoutsOutputReference <a name="ApiManagementWorkspacePolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementWorkspacePolicy } from '@cdktf/provider-azurerm'

new apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementWorkspacePolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a>

---



