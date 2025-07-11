# `apiManagementApiTag` Submodule <a name="`apiManagementApiTag` Submodule" id="@cdktf/provider-azurerm.apiManagementApiTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiTag <a name="ApiManagementApiTag" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag azurerm_api_management_api_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.Initializer"></a>

```typescript
import { apiManagementApiTag } from '@cdktf/provider-azurerm'

new apiManagementApiTag.ApiManagementApiTag(scope: Construct, id: string, config: ApiManagementApiTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig">ApiManagementApiTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig">ApiManagementApiTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementApiTagTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts">ApiManagementApiTagTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementApiTag resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.isConstruct"></a>

```typescript
import { apiManagementApiTag } from '@cdktf/provider-azurerm'

apiManagementApiTag.ApiManagementApiTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.isTerraformElement"></a>

```typescript
import { apiManagementApiTag } from '@cdktf/provider-azurerm'

apiManagementApiTag.ApiManagementApiTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.isTerraformResource"></a>

```typescript
import { apiManagementApiTag } from '@cdktf/provider-azurerm'

apiManagementApiTag.ApiManagementApiTag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.generateConfigForImport"></a>

```typescript
import { apiManagementApiTag } from '@cdktf/provider-azurerm'

apiManagementApiTag.ApiManagementApiTag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementApiTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementApiTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementApiTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApiTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference">ApiManagementApiTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts">ApiManagementApiTagTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementApiTagTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference">ApiManagementApiTagTimeoutsOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementApiTagTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts">ApiManagementApiTagTimeouts</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiTagConfig <a name="ApiManagementApiTagConfig" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.Initializer"></a>

```typescript
import { apiManagementApiTag } from '@cdktf/provider-azurerm'

const apiManagementApiTagConfig: apiManagementApiTag.ApiManagementApiTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#api_id ApiManagementApiTag#api_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#name ApiManagementApiTag#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#id ApiManagementApiTag#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts">ApiManagementApiTagTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#api_id ApiManagementApiTag#api_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#name ApiManagementApiTag#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#id ApiManagementApiTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementApiTagTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts">ApiManagementApiTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#timeouts ApiManagementApiTag#timeouts}

---

### ApiManagementApiTagTimeouts <a name="ApiManagementApiTagTimeouts" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts.Initializer"></a>

```typescript
import { apiManagementApiTag } from '@cdktf/provider-azurerm'

const apiManagementApiTagTimeouts: apiManagementApiTag.ApiManagementApiTagTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#create ApiManagementApiTag#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#delete ApiManagementApiTag#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#read ApiManagementApiTag#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#create ApiManagementApiTag#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#delete ApiManagementApiTag#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_api_tag#read ApiManagementApiTag#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiTagTimeoutsOutputReference <a name="ApiManagementApiTagTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementApiTag } from '@cdktf/provider-azurerm'

new apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts">ApiManagementApiTagTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiTagTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiTag.ApiManagementApiTagTimeouts">ApiManagementApiTagTimeouts</a>

---



