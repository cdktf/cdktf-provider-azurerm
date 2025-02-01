# `applicationInsightsWorkbook` Submodule <a name="`applicationInsightsWorkbook` Submodule" id="@cdktf/provider-azurerm.applicationInsightsWorkbook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsWorkbook <a name="ApplicationInsightsWorkbook" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook azurerm_application_insights_workbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer"></a>

```typescript
import { applicationInsightsWorkbook } from '@cdktf/provider-azurerm'

new applicationInsightsWorkbook.ApplicationInsightsWorkbook(scope: Construct, id: string, config: ApplicationInsightsWorkbookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig">ApplicationInsightsWorkbookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig">ApplicationInsightsWorkbookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetStorageContainerId">resetStorageContainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putIdentity"></a>

```typescript
public putIdentity(value: ApplicationInsightsWorkbookIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationInsightsWorkbookTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a>

---

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetSourceId` <a name="resetSourceId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetSourceId"></a>

```typescript
public resetSourceId(): void
```

##### `resetStorageContainerId` <a name="resetStorageContainerId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetStorageContainerId"></a>

```typescript
public resetStorageContainerId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationInsightsWorkbook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isConstruct"></a>

```typescript
import { applicationInsightsWorkbook } from '@cdktf/provider-azurerm'

applicationInsightsWorkbook.ApplicationInsightsWorkbook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformElement"></a>

```typescript
import { applicationInsightsWorkbook } from '@cdktf/provider-azurerm'

applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformResource"></a>

```typescript
import { applicationInsightsWorkbook } from '@cdktf/provider-azurerm'

applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport"></a>

```typescript
import { applicationInsightsWorkbook } from '@cdktf/provider-azurerm'

applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationInsightsWorkbook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationInsightsWorkbook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationInsightsWorkbook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsWorkbook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference">ApplicationInsightsWorkbookIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference">ApplicationInsightsWorkbookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dataJsonInput">dataJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.sourceIdInput">sourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dataJson">dataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.identity"></a>

```typescript
public readonly identity: ApplicationInsightsWorkbookIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference">ApplicationInsightsWorkbookIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsWorkbookTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference">ApplicationInsightsWorkbookTimeoutsOutputReference</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `dataJsonInput`<sup>Optional</sup> <a name="dataJsonInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dataJsonInput"></a>

```typescript
public readonly dataJsonInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.identityInput"></a>

```typescript
public readonly identityInput: ApplicationInsightsWorkbookIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: string;
```

- *Type:* string

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.storageContainerIdInput"></a>

```typescript
public readonly storageContainerIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationInsightsWorkbookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dataJson"></a>

```typescript
public readonly dataJson: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsWorkbookConfig <a name="ApplicationInsightsWorkbookConfig" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.Initializer"></a>

```typescript
import { applicationInsightsWorkbook } from '@cdktf/provider-azurerm'

const applicationInsightsWorkbookConfig: applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.dataJson">dataJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#data_json ApplicationInsightsWorkbook#data_json}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#display_name ApplicationInsightsWorkbook#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#location ApplicationInsightsWorkbook#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#name ApplicationInsightsWorkbook#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#resource_group_name ApplicationInsightsWorkbook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#category ApplicationInsightsWorkbook#category}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#description ApplicationInsightsWorkbook#description}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#id ApplicationInsightsWorkbook#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.sourceId">sourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#source_id ApplicationInsightsWorkbook#source_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#storage_container_id ApplicationInsightsWorkbook#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#tags ApplicationInsightsWorkbook#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.dataJson"></a>

```typescript
public readonly dataJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#data_json ApplicationInsightsWorkbook#data_json}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#display_name ApplicationInsightsWorkbook#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#location ApplicationInsightsWorkbook#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#name ApplicationInsightsWorkbook#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#resource_group_name ApplicationInsightsWorkbook#resource_group_name}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#category ApplicationInsightsWorkbook#category}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#description ApplicationInsightsWorkbook#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#id ApplicationInsightsWorkbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.identity"></a>

```typescript
public readonly identity: ApplicationInsightsWorkbookIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#identity ApplicationInsightsWorkbook#identity}

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#source_id ApplicationInsightsWorkbook#source_id}.

---

##### `storageContainerId`<sup>Optional</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#storage_container_id ApplicationInsightsWorkbook#storage_container_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#tags ApplicationInsightsWorkbook#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsWorkbookTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#timeouts ApplicationInsightsWorkbook#timeouts}

---

### ApplicationInsightsWorkbookIdentity <a name="ApplicationInsightsWorkbookIdentity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity.Initializer"></a>

```typescript
import { applicationInsightsWorkbook } from '@cdktf/provider-azurerm'

const applicationInsightsWorkbookIdentity: applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#type ApplicationInsightsWorkbook#type}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#identity_ids ApplicationInsightsWorkbook#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#type ApplicationInsightsWorkbook#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#identity_ids ApplicationInsightsWorkbook#identity_ids}.

---

### ApplicationInsightsWorkbookTimeouts <a name="ApplicationInsightsWorkbookTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.Initializer"></a>

```typescript
import { applicationInsightsWorkbook } from '@cdktf/provider-azurerm'

const applicationInsightsWorkbookTimeouts: applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#create ApplicationInsightsWorkbook#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#delete ApplicationInsightsWorkbook#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#read ApplicationInsightsWorkbook#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#update ApplicationInsightsWorkbook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#create ApplicationInsightsWorkbook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#delete ApplicationInsightsWorkbook#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#read ApplicationInsightsWorkbook#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/application_insights_workbook#update ApplicationInsightsWorkbook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsWorkbookIdentityOutputReference <a name="ApplicationInsightsWorkbookIdentityOutputReference" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.Initializer"></a>

```typescript
import { applicationInsightsWorkbook } from '@cdktf/provider-azurerm'

new applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationInsightsWorkbookIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a>

---


### ApplicationInsightsWorkbookTimeoutsOutputReference <a name="ApplicationInsightsWorkbookTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationInsightsWorkbook } from '@cdktf/provider-azurerm'

new applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationInsightsWorkbookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a>

---



