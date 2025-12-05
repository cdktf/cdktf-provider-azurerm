# `logAnalyticsWorkspaceTableCustomLog` Submodule <a name="`logAnalyticsWorkspaceTableCustomLog` Submodule" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsWorkspaceTableCustomLog <a name="LogAnalyticsWorkspaceTableCustomLog" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log azurerm_log_analytics_workspace_table_custom_log}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

new logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog(scope: Construct, id: string, config: LogAnalyticsWorkspaceTableCustomLogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig">LogAnalyticsWorkspaceTableCustomLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig">LogAnalyticsWorkspaceTableCustomLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetTotalRetentionInDays">resetTotalRetentionInDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumn` <a name="putColumn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putColumn"></a>

```typescript
public putColumn(value: IResolvable | LogAnalyticsWorkspaceTableCustomLogColumn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putColumn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putTimeouts"></a>

```typescript
public putTimeouts(value: LogAnalyticsWorkspaceTableCustomLogTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetPlan"></a>

```typescript
public resetPlan(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTotalRetentionInDays` <a name="resetTotalRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetTotalRetentionInDays"></a>

```typescript
public resetTotalRetentionInDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsWorkspaceTableCustomLog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isConstruct"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformElement"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformResource"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogAnalyticsWorkspaceTableCustomLog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsWorkspaceTableCustomLog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsWorkspaceTableCustomLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsWorkspaceTableCustomLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.column">column</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList">LogAnalyticsWorkspaceTableCustomLogColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.solutions">solutions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.standardColumn">standardColumn</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList">LogAnalyticsWorkspaceTableCustomLogStandardColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference">LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.columnInput">columnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.totalRetentionInDaysInput">totalRetentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.totalRetentionInDays">totalRetentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.column"></a>

```typescript
public readonly column: LogAnalyticsWorkspaceTableCustomLogColumnList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList">LogAnalyticsWorkspaceTableCustomLogColumnList</a>

---

##### `solutions`<sup>Required</sup> <a name="solutions" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.solutions"></a>

```typescript
public readonly solutions: string[];
```

- *Type:* string[]

---

##### `standardColumn`<sup>Required</sup> <a name="standardColumn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.standardColumn"></a>

```typescript
public readonly standardColumn: LogAnalyticsWorkspaceTableCustomLogStandardColumnList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList">LogAnalyticsWorkspaceTableCustomLogStandardColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.timeouts"></a>

```typescript
public readonly timeouts: LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference">LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.columnInput"></a>

```typescript
public readonly columnInput: IResolvable | LogAnalyticsWorkspaceTableCustomLogColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LogAnalyticsWorkspaceTableCustomLogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a>

---

##### `totalRetentionInDaysInput`<sup>Optional</sup> <a name="totalRetentionInDaysInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.totalRetentionInDaysInput"></a>

```typescript
public readonly totalRetentionInDaysInput: number;
```

- *Type:* number

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `totalRetentionInDays`<sup>Required</sup> <a name="totalRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.totalRetentionInDays"></a>

```typescript
public readonly totalRetentionInDays: number;
```

- *Type:* number

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsWorkspaceTableCustomLogColumn <a name="LogAnalyticsWorkspaceTableCustomLogColumn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

const logAnalyticsWorkspaceTableCustomLogColumn: logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#name LogAnalyticsWorkspaceTableCustomLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#type LogAnalyticsWorkspaceTableCustomLog#type}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#description LogAnalyticsWorkspaceTableCustomLog#description}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#display_name LogAnalyticsWorkspaceTableCustomLog#display_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#name LogAnalyticsWorkspaceTableCustomLog#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#type LogAnalyticsWorkspaceTableCustomLog#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#description LogAnalyticsWorkspaceTableCustomLog#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#display_name LogAnalyticsWorkspaceTableCustomLog#display_name}.

---

### LogAnalyticsWorkspaceTableCustomLogConfig <a name="LogAnalyticsWorkspaceTableCustomLogConfig" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

const logAnalyticsWorkspaceTableCustomLogConfig: logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.column">column</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]</code> | column block. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#name LogAnalyticsWorkspaceTableCustomLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#workspace_id LogAnalyticsWorkspaceTableCustomLog#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#description LogAnalyticsWorkspaceTableCustomLog#description}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#display_name LogAnalyticsWorkspaceTableCustomLog#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#id LogAnalyticsWorkspaceTableCustomLog#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.plan">plan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#plan LogAnalyticsWorkspaceTableCustomLog#plan}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#retention_in_days LogAnalyticsWorkspaceTableCustomLog#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.totalRetentionInDays">totalRetentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#total_retention_in_days LogAnalyticsWorkspaceTableCustomLog#total_retention_in_days}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.column"></a>

```typescript
public readonly column: IResolvable | LogAnalyticsWorkspaceTableCustomLogColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#column LogAnalyticsWorkspaceTableCustomLog#column}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#name LogAnalyticsWorkspaceTableCustomLog#name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#workspace_id LogAnalyticsWorkspaceTableCustomLog#workspace_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#description LogAnalyticsWorkspaceTableCustomLog#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#display_name LogAnalyticsWorkspaceTableCustomLog#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#id LogAnalyticsWorkspaceTableCustomLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#plan LogAnalyticsWorkspaceTableCustomLog#plan}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#retention_in_days LogAnalyticsWorkspaceTableCustomLog#retention_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogAnalyticsWorkspaceTableCustomLogTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#timeouts LogAnalyticsWorkspaceTableCustomLog#timeouts}

---

##### `totalRetentionInDays`<sup>Optional</sup> <a name="totalRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.totalRetentionInDays"></a>

```typescript
public readonly totalRetentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#total_retention_in_days LogAnalyticsWorkspaceTableCustomLog#total_retention_in_days}.

---

### LogAnalyticsWorkspaceTableCustomLogStandardColumn <a name="LogAnalyticsWorkspaceTableCustomLogStandardColumn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumn.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

const logAnalyticsWorkspaceTableCustomLogStandardColumn: logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumn = { ... }
```


### LogAnalyticsWorkspaceTableCustomLogTimeouts <a name="LogAnalyticsWorkspaceTableCustomLogTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

const logAnalyticsWorkspaceTableCustomLogTimeouts: logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#create LogAnalyticsWorkspaceTableCustomLog#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#delete LogAnalyticsWorkspaceTableCustomLog#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#read LogAnalyticsWorkspaceTableCustomLog#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#update LogAnalyticsWorkspaceTableCustomLog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#create LogAnalyticsWorkspaceTableCustomLog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#delete LogAnalyticsWorkspaceTableCustomLog#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#read LogAnalyticsWorkspaceTableCustomLog#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/log_analytics_workspace_table_custom_log#update LogAnalyticsWorkspaceTableCustomLog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsWorkspaceTableCustomLogColumnList <a name="LogAnalyticsWorkspaceTableCustomLogColumnList" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

new logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.get"></a>

```typescript
public get(index: number): LogAnalyticsWorkspaceTableCustomLogColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogAnalyticsWorkspaceTableCustomLogColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]

---


### LogAnalyticsWorkspaceTableCustomLogColumnOutputReference <a name="LogAnalyticsWorkspaceTableCustomLogColumnOutputReference" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

new logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogAnalyticsWorkspaceTableCustomLogColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>

---


### LogAnalyticsWorkspaceTableCustomLogStandardColumnList <a name="LogAnalyticsWorkspaceTableCustomLogStandardColumnList" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

new logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.get"></a>

```typescript
public get(index: number): LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference <a name="LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

new logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumn">LogAnalyticsWorkspaceTableCustomLogStandardColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogAnalyticsWorkspaceTableCustomLogStandardColumn;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumn">LogAnalyticsWorkspaceTableCustomLogStandardColumn</a>

---


### LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference <a name="LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.Initializer"></a>

```typescript
import { logAnalyticsWorkspaceTableCustomLog } from '@cdktf/provider-azurerm'

new logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogAnalyticsWorkspaceTableCustomLogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a>

---



