# `newRelicTagRule` Submodule <a name="`newRelicTagRule` Submodule" id="@cdktf/provider-azurerm.newRelicTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewRelicTagRule <a name="NewRelicTagRule" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule azurerm_new_relic_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

new newRelicTagRule.NewRelicTagRule(scope: Construct, id: string, config: NewRelicTagRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig">NewRelicTagRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig">NewRelicTagRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter">putLogTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter">putMetricTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetActivityLogEnabled">resetActivityLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetAzureActiveDirectoryLogEnabled">resetAzureActiveDirectoryLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetLogTagFilter">resetLogTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricEnabled">resetMetricEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricTagFilter">resetMetricTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetSubscriptionLogEnabled">resetSubscriptionLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogTagFilter` <a name="putLogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter"></a>

```typescript
public putLogTagFilter(value: IResolvable | NewRelicTagRuleLogTagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>[]

---

##### `putMetricTagFilter` <a name="putMetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter"></a>

```typescript
public putMetricTagFilter(value: IResolvable | NewRelicTagRuleMetricTagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts"></a>

```typescript
public putTimeouts(value: NewRelicTagRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

---

##### `resetActivityLogEnabled` <a name="resetActivityLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetActivityLogEnabled"></a>

```typescript
public resetActivityLogEnabled(): void
```

##### `resetAzureActiveDirectoryLogEnabled` <a name="resetAzureActiveDirectoryLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetAzureActiveDirectoryLogEnabled"></a>

```typescript
public resetAzureActiveDirectoryLogEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogTagFilter` <a name="resetLogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetLogTagFilter"></a>

```typescript
public resetLogTagFilter(): void
```

##### `resetMetricEnabled` <a name="resetMetricEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricEnabled"></a>

```typescript
public resetMetricEnabled(): void
```

##### `resetMetricTagFilter` <a name="resetMetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricTagFilter"></a>

```typescript
public resetMetricTagFilter(): void
```

##### `resetSubscriptionLogEnabled` <a name="resetSubscriptionLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetSubscriptionLogEnabled"></a>

```typescript
public resetSubscriptionLogEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NewRelicTagRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

newRelicTagRule.NewRelicTagRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

newRelicTagRule.NewRelicTagRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

newRelicTagRule.NewRelicTagRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

newRelicTagRule.NewRelicTagRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NewRelicTagRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NewRelicTagRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NewRelicTagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NewRelicTagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilter">logTagFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList">NewRelicTagRuleLogTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilter">metricTagFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList">NewRelicTagRuleMetricTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference">NewRelicTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabledInput">activityLogEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabledInput">azureActiveDirectoryLogEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilterInput">logTagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabledInput">metricEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilterInput">metricTagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorIdInput">monitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabledInput">subscriptionLogEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabled">activityLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabled">azureActiveDirectoryLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabled">metricEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabled">subscriptionLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logTagFilter`<sup>Required</sup> <a name="logTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilter"></a>

```typescript
public readonly logTagFilter: NewRelicTagRuleLogTagFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList">NewRelicTagRuleLogTagFilterList</a>

---

##### `metricTagFilter`<sup>Required</sup> <a name="metricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilter"></a>

```typescript
public readonly metricTagFilter: NewRelicTagRuleMetricTagFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList">NewRelicTagRuleMetricTagFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeouts"></a>

```typescript
public readonly timeouts: NewRelicTagRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference">NewRelicTagRuleTimeoutsOutputReference</a>

---

##### `activityLogEnabledInput`<sup>Optional</sup> <a name="activityLogEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabledInput"></a>

```typescript
public readonly activityLogEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `azureActiveDirectoryLogEnabledInput`<sup>Optional</sup> <a name="azureActiveDirectoryLogEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabledInput"></a>

```typescript
public readonly azureActiveDirectoryLogEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logTagFilterInput`<sup>Optional</sup> <a name="logTagFilterInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilterInput"></a>

```typescript
public readonly logTagFilterInput: IResolvable | NewRelicTagRuleLogTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>[]

---

##### `metricEnabledInput`<sup>Optional</sup> <a name="metricEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabledInput"></a>

```typescript
public readonly metricEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricTagFilterInput`<sup>Optional</sup> <a name="metricTagFilterInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilterInput"></a>

```typescript
public readonly metricTagFilterInput: IResolvable | NewRelicTagRuleMetricTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>[]

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorIdInput"></a>

```typescript
public readonly monitorIdInput: string;
```

- *Type:* string

---

##### `subscriptionLogEnabledInput`<sup>Optional</sup> <a name="subscriptionLogEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabledInput"></a>

```typescript
public readonly subscriptionLogEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NewRelicTagRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

---

##### `activityLogEnabled`<sup>Required</sup> <a name="activityLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabled"></a>

```typescript
public readonly activityLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `azureActiveDirectoryLogEnabled`<sup>Required</sup> <a name="azureActiveDirectoryLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabled"></a>

```typescript
public readonly azureActiveDirectoryLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricEnabled`<sup>Required</sup> <a name="metricEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabled"></a>

```typescript
public readonly metricEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

##### `subscriptionLogEnabled`<sup>Required</sup> <a name="subscriptionLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabled"></a>

```typescript
public readonly subscriptionLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NewRelicTagRuleConfig <a name="NewRelicTagRuleConfig" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.Initializer"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

const newRelicTagRuleConfig: newRelicTagRule.NewRelicTagRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.monitorId">monitorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.activityLogEnabled">activityLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.azureActiveDirectoryLogEnabled">azureActiveDirectoryLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.logTagFilter">logTagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>[]</code> | log_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricEnabled">metricEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricTagFilter">metricTagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>[]</code> | metric_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.subscriptionLogEnabled">subscriptionLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}.

---

##### `activityLogEnabled`<sup>Optional</sup> <a name="activityLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.activityLogEnabled"></a>

```typescript
public readonly activityLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}.

---

##### `azureActiveDirectoryLogEnabled`<sup>Optional</sup> <a name="azureActiveDirectoryLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.azureActiveDirectoryLogEnabled"></a>

```typescript
public readonly azureActiveDirectoryLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logTagFilter`<sup>Optional</sup> <a name="logTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.logTagFilter"></a>

```typescript
public readonly logTagFilter: IResolvable | NewRelicTagRuleLogTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>[]

log_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#log_tag_filter NewRelicTagRule#log_tag_filter}

---

##### `metricEnabled`<sup>Optional</sup> <a name="metricEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricEnabled"></a>

```typescript
public readonly metricEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}.

---

##### `metricTagFilter`<sup>Optional</sup> <a name="metricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricTagFilter"></a>

```typescript
public readonly metricTagFilter: IResolvable | NewRelicTagRuleMetricTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>[]

metric_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#metric_tag_filter NewRelicTagRule#metric_tag_filter}

---

##### `subscriptionLogEnabled`<sup>Optional</sup> <a name="subscriptionLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.subscriptionLogEnabled"></a>

```typescript
public readonly subscriptionLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NewRelicTagRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#timeouts NewRelicTagRule#timeouts}

---

### NewRelicTagRuleLogTagFilter <a name="NewRelicTagRuleLogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.Initializer"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

const newRelicTagRuleLogTagFilter: newRelicTagRule.NewRelicTagRuleLogTagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}.

---

### NewRelicTagRuleMetricTagFilter <a name="NewRelicTagRuleMetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.Initializer"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

const newRelicTagRuleMetricTagFilter: newRelicTagRule.NewRelicTagRuleMetricTagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}.

---

### NewRelicTagRuleTimeouts <a name="NewRelicTagRuleTimeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.Initializer"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

const newRelicTagRuleTimeouts: newRelicTagRule.NewRelicTagRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#create NewRelicTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#delete NewRelicTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#read NewRelicTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#update NewRelicTagRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#create NewRelicTagRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#delete NewRelicTagRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#read NewRelicTagRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/new_relic_tag_rule#update NewRelicTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NewRelicTagRuleLogTagFilterList <a name="NewRelicTagRuleLogTagFilterList" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

new newRelicTagRule.NewRelicTagRuleLogTagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get"></a>

```typescript
public get(index: number): NewRelicTagRuleLogTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NewRelicTagRuleLogTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>[]

---


### NewRelicTagRuleLogTagFilterOutputReference <a name="NewRelicTagRuleLogTagFilterOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

new newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NewRelicTagRuleLogTagFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>

---


### NewRelicTagRuleMetricTagFilterList <a name="NewRelicTagRuleMetricTagFilterList" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

new newRelicTagRule.NewRelicTagRuleMetricTagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get"></a>

```typescript
public get(index: number): NewRelicTagRuleMetricTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NewRelicTagRuleMetricTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>[]

---


### NewRelicTagRuleMetricTagFilterOutputReference <a name="NewRelicTagRuleMetricTagFilterOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

new newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NewRelicTagRuleMetricTagFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>

---


### NewRelicTagRuleTimeoutsOutputReference <a name="NewRelicTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { newRelicTagRule } from '@cdktf/provider-azurerm'

new newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NewRelicTagRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

---



