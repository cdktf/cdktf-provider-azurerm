# `datadogMonitorTagRule` Submodule <a name="`datadogMonitorTagRule` Submodule" id="@cdktf/provider-azurerm.datadogMonitorTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogMonitorTagRule <a name="DatadogMonitorTagRule" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule azurerm_datadog_monitor_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

new datadogMonitorTagRule.DatadogMonitorTagRule(scope: Construct, id: string, config: DatadogMonitorTagRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig">DatadogMonitorTagRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig">DatadogMonitorTagRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog">putLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetLog">resetLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLog` <a name="putLog" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog"></a>

```typescript
public putLog(value: IResolvable | DatadogMonitorTagRuleLog[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>[]

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric"></a>

```typescript
public putMetric(value: IResolvable | DatadogMonitorTagRuleMetric[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts"></a>

```typescript
public putTimeouts(value: DatadogMonitorTagRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLog` <a name="resetLog" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetLog"></a>

```typescript
public resetLog(): void
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatadogMonitorTagRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatadogMonitorTagRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatadogMonitorTagRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatadogMonitorTagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatadogMonitorTagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.log">log</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList">DatadogMonitorTagRuleLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList">DatadogMonitorTagRuleMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference">DatadogMonitorTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorIdInput">datadogMonitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.logInput">logInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metricInput">metricInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorId">datadogMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.log"></a>

```typescript
public readonly log: DatadogMonitorTagRuleLogList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList">DatadogMonitorTagRuleLogList</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metric"></a>

```typescript
public readonly metric: DatadogMonitorTagRuleMetricList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList">DatadogMonitorTagRuleMetricList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeouts"></a>

```typescript
public readonly timeouts: DatadogMonitorTagRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference">DatadogMonitorTagRuleTimeoutsOutputReference</a>

---

##### `datadogMonitorIdInput`<sup>Optional</sup> <a name="datadogMonitorIdInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorIdInput"></a>

```typescript
public readonly datadogMonitorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logInput`<sup>Optional</sup> <a name="logInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.logInput"></a>

```typescript
public readonly logInput: IResolvable | DatadogMonitorTagRuleLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>[]

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metricInput"></a>

```typescript
public readonly metricInput: IResolvable | DatadogMonitorTagRuleMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatadogMonitorTagRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

---

##### `datadogMonitorId`<sup>Required</sup> <a name="datadogMonitorId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorId"></a>

```typescript
public readonly datadogMonitorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogMonitorTagRuleConfig <a name="DatadogMonitorTagRuleConfig" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

const datadogMonitorTagRuleConfig: datadogMonitorTagRule.DatadogMonitorTagRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.datadogMonitorId">datadogMonitorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.log">log</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>[]</code> | log block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.metric">metric</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>[]</code> | metric block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datadogMonitorId`<sup>Required</sup> <a name="datadogMonitorId" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.datadogMonitorId"></a>

```typescript
public readonly datadogMonitorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.log"></a>

```typescript
public readonly log: IResolvable | DatadogMonitorTagRuleLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>[]

log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#log DatadogMonitorTagRule#log}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.metric"></a>

```typescript
public readonly metric: IResolvable | DatadogMonitorTagRuleMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>[]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#metric DatadogMonitorTagRule#metric}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatadogMonitorTagRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#timeouts DatadogMonitorTagRule#timeouts}

---

### DatadogMonitorTagRuleLog <a name="DatadogMonitorTagRuleLog" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

const datadogMonitorTagRuleLog: datadogMonitorTagRule.DatadogMonitorTagRuleLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.aadLogEnabled">aadLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#aad_log_enabled DatadogMonitorTagRule#aad_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.resourceLogEnabled">resourceLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#resource_log_enabled DatadogMonitorTagRule#resource_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.subscriptionLogEnabled">subscriptionLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#subscription_log_enabled DatadogMonitorTagRule#subscription_log_enabled}. |

---

##### `aadLogEnabled`<sup>Optional</sup> <a name="aadLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.aadLogEnabled"></a>

```typescript
public readonly aadLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#aad_log_enabled DatadogMonitorTagRule#aad_log_enabled}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.filter"></a>

```typescript
public readonly filter: IResolvable | DatadogMonitorTagRuleLogFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#filter DatadogMonitorTagRule#filter}

---

##### `resourceLogEnabled`<sup>Optional</sup> <a name="resourceLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.resourceLogEnabled"></a>

```typescript
public readonly resourceLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#resource_log_enabled DatadogMonitorTagRule#resource_log_enabled}.

---

##### `subscriptionLogEnabled`<sup>Optional</sup> <a name="subscriptionLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.subscriptionLogEnabled"></a>

```typescript
public readonly subscriptionLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#subscription_log_enabled DatadogMonitorTagRule#subscription_log_enabled}.

---

### DatadogMonitorTagRuleLogFilter <a name="DatadogMonitorTagRuleLogFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

const datadogMonitorTagRuleLogFilter: datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}.

---

### DatadogMonitorTagRuleMetric <a name="DatadogMonitorTagRuleMetric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

const datadogMonitorTagRuleMetric: datadogMonitorTagRule.DatadogMonitorTagRuleMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>[]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.property.filter"></a>

```typescript
public readonly filter: IResolvable | DatadogMonitorTagRuleMetricFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#filter DatadogMonitorTagRule#filter}

---

### DatadogMonitorTagRuleMetricFilter <a name="DatadogMonitorTagRuleMetricFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

const datadogMonitorTagRuleMetricFilter: datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}.

---

### DatadogMonitorTagRuleTimeouts <a name="DatadogMonitorTagRuleTimeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

const datadogMonitorTagRuleTimeouts: datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#create DatadogMonitorTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#delete DatadogMonitorTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#read DatadogMonitorTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#update DatadogMonitorTagRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#create DatadogMonitorTagRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#delete DatadogMonitorTagRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#read DatadogMonitorTagRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/datadog_monitor_tag_rule#update DatadogMonitorTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatadogMonitorTagRuleLogFilterList <a name="DatadogMonitorTagRuleLogFilterList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

new datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get"></a>

```typescript
public get(index: number): DatadogMonitorTagRuleLogFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatadogMonitorTagRuleLogFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>[]

---


### DatadogMonitorTagRuleLogFilterOutputReference <a name="DatadogMonitorTagRuleLogFilterOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

new datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatadogMonitorTagRuleLogFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>

---


### DatadogMonitorTagRuleLogList <a name="DatadogMonitorTagRuleLogList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

new datadogMonitorTagRule.DatadogMonitorTagRuleLogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get"></a>

```typescript
public get(index: number): DatadogMonitorTagRuleLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatadogMonitorTagRuleLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>[]

---


### DatadogMonitorTagRuleLogOutputReference <a name="DatadogMonitorTagRuleLogOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

new datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetAadLogEnabled">resetAadLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetResourceLogEnabled">resetResourceLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetSubscriptionLogEnabled">resetSubscriptionLogEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DatadogMonitorTagRuleLogFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>[]

---

##### `resetAadLogEnabled` <a name="resetAadLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetAadLogEnabled"></a>

```typescript
public resetAadLogEnabled(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetResourceLogEnabled` <a name="resetResourceLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetResourceLogEnabled"></a>

```typescript
public resetResourceLogEnabled(): void
```

##### `resetSubscriptionLogEnabled` <a name="resetSubscriptionLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetSubscriptionLogEnabled"></a>

```typescript
public resetSubscriptionLogEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList">DatadogMonitorTagRuleLogFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabledInput">aadLogEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabledInput">resourceLogEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabledInput">subscriptionLogEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabled">aadLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabled">resourceLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabled">subscriptionLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filter"></a>

```typescript
public readonly filter: DatadogMonitorTagRuleLogFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList">DatadogMonitorTagRuleLogFilterList</a>

---

##### `aadLogEnabledInput`<sup>Optional</sup> <a name="aadLogEnabledInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabledInput"></a>

```typescript
public readonly aadLogEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DatadogMonitorTagRuleLogFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>[]

---

##### `resourceLogEnabledInput`<sup>Optional</sup> <a name="resourceLogEnabledInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabledInput"></a>

```typescript
public readonly resourceLogEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subscriptionLogEnabledInput`<sup>Optional</sup> <a name="subscriptionLogEnabledInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabledInput"></a>

```typescript
public readonly subscriptionLogEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `aadLogEnabled`<sup>Required</sup> <a name="aadLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabled"></a>

```typescript
public readonly aadLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceLogEnabled`<sup>Required</sup> <a name="resourceLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabled"></a>

```typescript
public readonly resourceLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subscriptionLogEnabled`<sup>Required</sup> <a name="subscriptionLogEnabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabled"></a>

```typescript
public readonly subscriptionLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatadogMonitorTagRuleLog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>

---


### DatadogMonitorTagRuleMetricFilterList <a name="DatadogMonitorTagRuleMetricFilterList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

new datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get"></a>

```typescript
public get(index: number): DatadogMonitorTagRuleMetricFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatadogMonitorTagRuleMetricFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>[]

---


### DatadogMonitorTagRuleMetricFilterOutputReference <a name="DatadogMonitorTagRuleMetricFilterOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

new datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatadogMonitorTagRuleMetricFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>

---


### DatadogMonitorTagRuleMetricList <a name="DatadogMonitorTagRuleMetricList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

new datadogMonitorTagRule.DatadogMonitorTagRuleMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get"></a>

```typescript
public get(index: number): DatadogMonitorTagRuleMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatadogMonitorTagRuleMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>[]

---


### DatadogMonitorTagRuleMetricOutputReference <a name="DatadogMonitorTagRuleMetricOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

new datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DatadogMonitorTagRuleMetricFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList">DatadogMonitorTagRuleMetricFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filter"></a>

```typescript
public readonly filter: DatadogMonitorTagRuleMetricFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList">DatadogMonitorTagRuleMetricFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DatadogMonitorTagRuleMetricFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatadogMonitorTagRuleMetric;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>

---


### DatadogMonitorTagRuleTimeoutsOutputReference <a name="DatadogMonitorTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { datadogMonitorTagRule } from '@cdktf/provider-azurerm'

new datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatadogMonitorTagRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

---



