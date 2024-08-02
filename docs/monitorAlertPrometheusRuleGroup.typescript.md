# `monitorAlertPrometheusRuleGroup` Submodule <a name="`monitorAlertPrometheusRuleGroup` Submodule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlertPrometheusRuleGroup <a name="MonitorAlertPrometheusRuleGroup" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group azurerm_monitor_alert_prometheus_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

new monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup(scope: Construct, id: string, config: MonitorAlertPrometheusRuleGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig">MonitorAlertPrometheusRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig">MonitorAlertPrometheusRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetRuleGroupEnabled">resetRuleGroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putRule"></a>

```typescript
public putRule(value: IResolvable | MonitorAlertPrometheusRuleGroupRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitorAlertPrometheusRuleGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>

---

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetRuleGroupEnabled` <a name="resetRuleGroupEnabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetRuleGroupEnabled"></a>

```typescript
public resetRuleGroupEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorAlertPrometheusRuleGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isConstruct"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformElement"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformResource"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitorAlertPrometheusRuleGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorAlertPrometheusRuleGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorAlertPrometheusRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAlertPrometheusRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList">MonitorAlertPrometheusRuleGroupRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference">MonitorAlertPrometheusRuleGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabledInput">ruleGroupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabled">ruleGroupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.rule"></a>

```typescript
public readonly rule: MonitorAlertPrometheusRuleGroupRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList">MonitorAlertPrometheusRuleGroupRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorAlertPrometheusRuleGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference">MonitorAlertPrometheusRuleGroupTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `ruleGroupEnabledInput`<sup>Optional</sup> <a name="ruleGroupEnabledInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabledInput"></a>

```typescript
public readonly ruleGroupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | MonitorAlertPrometheusRuleGroupRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>[]

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitorAlertPrometheusRuleGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `ruleGroupEnabled`<sup>Required</sup> <a name="ruleGroupEnabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabled"></a>

```typescript
public readonly ruleGroupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertPrometheusRuleGroupConfig <a name="MonitorAlertPrometheusRuleGroupConfig" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

const monitorAlertPrometheusRuleGroupConfig: monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#location MonitorAlertPrometheusRuleGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#name MonitorAlertPrometheusRuleGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#resource_group_name MonitorAlertPrometheusRuleGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#scopes MonitorAlertPrometheusRuleGroup#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#cluster_name MonitorAlertPrometheusRuleGroup#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#description MonitorAlertPrometheusRuleGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#id MonitorAlertPrometheusRuleGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.interval">interval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#interval MonitorAlertPrometheusRuleGroup#interval}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.ruleGroupEnabled">ruleGroupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#rule_group_enabled MonitorAlertPrometheusRuleGroup#rule_group_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#tags MonitorAlertPrometheusRuleGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#location MonitorAlertPrometheusRuleGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#name MonitorAlertPrometheusRuleGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#resource_group_name MonitorAlertPrometheusRuleGroup#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | MonitorAlertPrometheusRuleGroupRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#rule MonitorAlertPrometheusRuleGroup#rule}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#scopes MonitorAlertPrometheusRuleGroup#scopes}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#cluster_name MonitorAlertPrometheusRuleGroup#cluster_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#description MonitorAlertPrometheusRuleGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#id MonitorAlertPrometheusRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#interval MonitorAlertPrometheusRuleGroup#interval}.

---

##### `ruleGroupEnabled`<sup>Optional</sup> <a name="ruleGroupEnabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.ruleGroupEnabled"></a>

```typescript
public readonly ruleGroupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#rule_group_enabled MonitorAlertPrometheusRuleGroup#rule_group_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#tags MonitorAlertPrometheusRuleGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorAlertPrometheusRuleGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#timeouts MonitorAlertPrometheusRuleGroup#timeouts}

---

### MonitorAlertPrometheusRuleGroupRule <a name="MonitorAlertPrometheusRuleGroupRule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

const monitorAlertPrometheusRuleGroupRule: monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#expression MonitorAlertPrometheusRuleGroup#expression}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>[]</code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alert">alert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#alert MonitorAlertPrometheusRuleGroup#alert}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alertResolution">alertResolution</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a></code> | alert_resolution block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#annotations MonitorAlertPrometheusRuleGroup#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#enabled MonitorAlertPrometheusRuleGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.for">for</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#for MonitorAlertPrometheusRuleGroup#for}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#labels MonitorAlertPrometheusRuleGroup#labels}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.record">record</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#record MonitorAlertPrometheusRuleGroup#record}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.severity">severity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#severity MonitorAlertPrometheusRuleGroup#severity}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#expression MonitorAlertPrometheusRuleGroup#expression}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.action"></a>

```typescript
public readonly action: IResolvable | MonitorAlertPrometheusRuleGroupRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#action MonitorAlertPrometheusRuleGroup#action}

---

##### `alert`<sup>Optional</sup> <a name="alert" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alert"></a>

```typescript
public readonly alert: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#alert MonitorAlertPrometheusRuleGroup#alert}.

---

##### `alertResolution`<sup>Optional</sup> <a name="alertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alertResolution"></a>

```typescript
public readonly alertResolution: MonitorAlertPrometheusRuleGroupRuleAlertResolution;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

alert_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#alert_resolution MonitorAlertPrometheusRuleGroup#alert_resolution}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#annotations MonitorAlertPrometheusRuleGroup#annotations}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#enabled MonitorAlertPrometheusRuleGroup#enabled}.

---

##### `for`<sup>Optional</sup> <a name="for" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.for"></a>

```typescript
public readonly for: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#for MonitorAlertPrometheusRuleGroup#for}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#labels MonitorAlertPrometheusRuleGroup#labels}.

---

##### `record`<sup>Optional</sup> <a name="record" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.record"></a>

```typescript
public readonly record: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#record MonitorAlertPrometheusRuleGroup#record}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.severity"></a>

```typescript
public readonly severity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#severity MonitorAlertPrometheusRuleGroup#severity}.

---

### MonitorAlertPrometheusRuleGroupRuleAction <a name="MonitorAlertPrometheusRuleGroupRuleAction" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

const monitorAlertPrometheusRuleGroupRuleAction: monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionGroupId">actionGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#action_group_id MonitorAlertPrometheusRuleGroup#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionProperties">actionProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#action_properties MonitorAlertPrometheusRuleGroup#action_properties}. |

---

##### `actionGroupId`<sup>Required</sup> <a name="actionGroupId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionGroupId"></a>

```typescript
public readonly actionGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#action_group_id MonitorAlertPrometheusRuleGroup#action_group_id}.

---

##### `actionProperties`<sup>Optional</sup> <a name="actionProperties" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionProperties"></a>

```typescript
public readonly actionProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#action_properties MonitorAlertPrometheusRuleGroup#action_properties}.

---

### MonitorAlertPrometheusRuleGroupRuleAlertResolution <a name="MonitorAlertPrometheusRuleGroupRuleAlertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

const monitorAlertPrometheusRuleGroupRuleAlertResolution: monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.autoResolved">autoResolved</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#auto_resolved MonitorAlertPrometheusRuleGroup#auto_resolved}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.timeToResolve">timeToResolve</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#time_to_resolve MonitorAlertPrometheusRuleGroup#time_to_resolve}. |

---

##### `autoResolved`<sup>Optional</sup> <a name="autoResolved" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.autoResolved"></a>

```typescript
public readonly autoResolved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#auto_resolved MonitorAlertPrometheusRuleGroup#auto_resolved}.

---

##### `timeToResolve`<sup>Optional</sup> <a name="timeToResolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.timeToResolve"></a>

```typescript
public readonly timeToResolve: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#time_to_resolve MonitorAlertPrometheusRuleGroup#time_to_resolve}.

---

### MonitorAlertPrometheusRuleGroupTimeouts <a name="MonitorAlertPrometheusRuleGroupTimeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

const monitorAlertPrometheusRuleGroupTimeouts: monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#create MonitorAlertPrometheusRuleGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#delete MonitorAlertPrometheusRuleGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#read MonitorAlertPrometheusRuleGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#update MonitorAlertPrometheusRuleGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#create MonitorAlertPrometheusRuleGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#delete MonitorAlertPrometheusRuleGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#read MonitorAlertPrometheusRuleGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/monitor_alert_prometheus_rule_group#update MonitorAlertPrometheusRuleGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertPrometheusRuleGroupRuleActionList <a name="MonitorAlertPrometheusRuleGroupRuleActionList" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

new monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.get"></a>

```typescript
public get(index: number): MonitorAlertPrometheusRuleGroupRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAlertPrometheusRuleGroupRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>[]

---


### MonitorAlertPrometheusRuleGroupRuleActionOutputReference <a name="MonitorAlertPrometheusRuleGroupRuleActionOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

new monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resetActionProperties">resetActionProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionProperties` <a name="resetActionProperties" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resetActionProperties"></a>

```typescript
public resetActionProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupIdInput">actionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionPropertiesInput">actionPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupId">actionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionProperties">actionProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionGroupIdInput`<sup>Optional</sup> <a name="actionGroupIdInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupIdInput"></a>

```typescript
public readonly actionGroupIdInput: string;
```

- *Type:* string

---

##### `actionPropertiesInput`<sup>Optional</sup> <a name="actionPropertiesInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionPropertiesInput"></a>

```typescript
public readonly actionPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `actionGroupId`<sup>Required</sup> <a name="actionGroupId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupId"></a>

```typescript
public readonly actionGroupId: string;
```

- *Type:* string

---

##### `actionProperties`<sup>Required</sup> <a name="actionProperties" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionProperties"></a>

```typescript
public readonly actionProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAlertPrometheusRuleGroupRuleAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>

---


### MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference <a name="MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

new monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetAutoResolved">resetAutoResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetTimeToResolve">resetTimeToResolve</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoResolved` <a name="resetAutoResolved" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetAutoResolved"></a>

```typescript
public resetAutoResolved(): void
```

##### `resetTimeToResolve` <a name="resetTimeToResolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetTimeToResolve"></a>

```typescript
public resetTimeToResolve(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolvedInput">autoResolvedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolveInput">timeToResolveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolved">autoResolved</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolve">timeToResolve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoResolvedInput`<sup>Optional</sup> <a name="autoResolvedInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolvedInput"></a>

```typescript
public readonly autoResolvedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeToResolveInput`<sup>Optional</sup> <a name="timeToResolveInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolveInput"></a>

```typescript
public readonly timeToResolveInput: string;
```

- *Type:* string

---

##### `autoResolved`<sup>Required</sup> <a name="autoResolved" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolved"></a>

```typescript
public readonly autoResolved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeToResolve`<sup>Required</sup> <a name="timeToResolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolve"></a>

```typescript
public readonly timeToResolve: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertPrometheusRuleGroupRuleAlertResolution;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

---


### MonitorAlertPrometheusRuleGroupRuleList <a name="MonitorAlertPrometheusRuleGroupRuleList" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

new monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.get"></a>

```typescript
public get(index: number): MonitorAlertPrometheusRuleGroupRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAlertPrometheusRuleGroupRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>[]

---


### MonitorAlertPrometheusRuleGroupRuleOutputReference <a name="MonitorAlertPrometheusRuleGroupRuleOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

new monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAlertResolution">putAlertResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlert">resetAlert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlertResolution">resetAlertResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetFor">resetFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetRecord">resetRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAction"></a>

```typescript
public putAction(value: IResolvable | MonitorAlertPrometheusRuleGroupRuleAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>[]

---

##### `putAlertResolution` <a name="putAlertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAlertResolution"></a>

```typescript
public putAlertResolution(value: MonitorAlertPrometheusRuleGroupRuleAlertResolution): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAlertResolution.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetAlert` <a name="resetAlert" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlert"></a>

```typescript
public resetAlert(): void
```

##### `resetAlertResolution` <a name="resetAlertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlertResolution"></a>

```typescript
public resetAlertResolution(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFor` <a name="resetFor" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetFor"></a>

```typescript
public resetFor(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRecord` <a name="resetRecord" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetRecord"></a>

```typescript
public resetRecord(): void
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList">MonitorAlertPrometheusRuleGroupRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolution">alertResolution</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference">MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertInput">alertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolutionInput">alertResolutionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.forInput">forInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.recordInput">recordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severityInput">severityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alert">alert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.for">for</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.record">record</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severity">severity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.action"></a>

```typescript
public readonly action: MonitorAlertPrometheusRuleGroupRuleActionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList">MonitorAlertPrometheusRuleGroupRuleActionList</a>

---

##### `alertResolution`<sup>Required</sup> <a name="alertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolution"></a>

```typescript
public readonly alertResolution: MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference">MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | MonitorAlertPrometheusRuleGroupRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>[]

---

##### `alertInput`<sup>Optional</sup> <a name="alertInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertInput"></a>

```typescript
public readonly alertInput: string;
```

- *Type:* string

---

##### `alertResolutionInput`<sup>Optional</sup> <a name="alertResolutionInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolutionInput"></a>

```typescript
public readonly alertResolutionInput: MonitorAlertPrometheusRuleGroupRuleAlertResolution;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `forInput`<sup>Optional</sup> <a name="forInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.forInput"></a>

```typescript
public readonly forInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `recordInput`<sup>Optional</sup> <a name="recordInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.recordInput"></a>

```typescript
public readonly recordInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: number;
```

- *Type:* number

---

##### `alert`<sup>Required</sup> <a name="alert" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alert"></a>

```typescript
public readonly alert: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `for`<sup>Required</sup> <a name="for" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.for"></a>

```typescript
public readonly for: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.record"></a>

```typescript
public readonly record: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severity"></a>

```typescript
public readonly severity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAlertPrometheusRuleGroupRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>

---


### MonitorAlertPrometheusRuleGroupTimeoutsOutputReference <a name="MonitorAlertPrometheusRuleGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitorAlertPrometheusRuleGroup } from '@cdktf/provider-azurerm'

new monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAlertPrometheusRuleGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>

---



