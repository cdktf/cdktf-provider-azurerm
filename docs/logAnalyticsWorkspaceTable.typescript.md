# `logAnalyticsWorkspaceTable` Submodule <a name="`logAnalyticsWorkspaceTable` Submodule" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsWorkspaceTable <a name="LogAnalyticsWorkspaceTable" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table azurerm_log_analytics_workspace_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

new logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable(scope: Construct, id: string, config: LogAnalyticsWorkspaceTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig">LogAnalyticsWorkspaceTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig">LogAnalyticsWorkspaceTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetTotalRetentionInDays">resetTotalRetentionInDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.putTimeouts"></a>

```typescript
public putTimeouts(value: LogAnalyticsWorkspaceTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts">LogAnalyticsWorkspaceTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetPlan"></a>

```typescript
public resetPlan(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTotalRetentionInDays` <a name="resetTotalRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.resetTotalRetentionInDays"></a>

```typescript
public resetTotalRetentionInDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsWorkspaceTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isConstruct"></a>

```typescript
import { logAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformElement"></a>

```typescript
import { logAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformResource"></a>

```typescript
import { logAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport"></a>

```typescript
import { logAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogAnalyticsWorkspaceTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsWorkspaceTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsWorkspaceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsWorkspaceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference">LogAnalyticsWorkspaceTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts">LogAnalyticsWorkspaceTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.totalRetentionInDaysInput">totalRetentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.totalRetentionInDays">totalRetentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.timeouts"></a>

```typescript
public readonly timeouts: LogAnalyticsWorkspaceTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference">LogAnalyticsWorkspaceTableTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LogAnalyticsWorkspaceTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts">LogAnalyticsWorkspaceTableTimeouts</a>

---

##### `totalRetentionInDaysInput`<sup>Optional</sup> <a name="totalRetentionInDaysInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.totalRetentionInDaysInput"></a>

```typescript
public readonly totalRetentionInDaysInput: number;
```

- *Type:* number

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `totalRetentionInDays`<sup>Required</sup> <a name="totalRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.totalRetentionInDays"></a>

```typescript
public readonly totalRetentionInDays: number;
```

- *Type:* number

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsWorkspaceTableConfig <a name="LogAnalyticsWorkspaceTableConfig" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

const logAnalyticsWorkspaceTableConfig: logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#name LogAnalyticsWorkspaceTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#workspace_id LogAnalyticsWorkspaceTable#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#id LogAnalyticsWorkspaceTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.plan">plan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#plan LogAnalyticsWorkspaceTable#plan}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#retention_in_days LogAnalyticsWorkspaceTable#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts">LogAnalyticsWorkspaceTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.totalRetentionInDays">totalRetentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#total_retention_in_days LogAnalyticsWorkspaceTable#total_retention_in_days}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#name LogAnalyticsWorkspaceTable#name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#workspace_id LogAnalyticsWorkspaceTable#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#id LogAnalyticsWorkspaceTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#plan LogAnalyticsWorkspaceTable#plan}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#retention_in_days LogAnalyticsWorkspaceTable#retention_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogAnalyticsWorkspaceTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts">LogAnalyticsWorkspaceTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#timeouts LogAnalyticsWorkspaceTable#timeouts}

---

##### `totalRetentionInDays`<sup>Optional</sup> <a name="totalRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableConfig.property.totalRetentionInDays"></a>

```typescript
public readonly totalRetentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#total_retention_in_days LogAnalyticsWorkspaceTable#total_retention_in_days}.

---

### LogAnalyticsWorkspaceTableTimeouts <a name="LogAnalyticsWorkspaceTableTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

const logAnalyticsWorkspaceTableTimeouts: logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#create LogAnalyticsWorkspaceTable#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#delete LogAnalyticsWorkspaceTable#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#read LogAnalyticsWorkspaceTable#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#update LogAnalyticsWorkspaceTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#create LogAnalyticsWorkspaceTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#delete LogAnalyticsWorkspaceTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#read LogAnalyticsWorkspaceTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/log_analytics_workspace_table#update LogAnalyticsWorkspaceTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsWorkspaceTableTimeoutsOutputReference <a name="LogAnalyticsWorkspaceTableTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

new logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts">LogAnalyticsWorkspaceTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogAnalyticsWorkspaceTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTable.LogAnalyticsWorkspaceTableTimeouts">LogAnalyticsWorkspaceTableTimeouts</a>

---



