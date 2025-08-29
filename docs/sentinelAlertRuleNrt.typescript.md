# `sentinelAlertRuleNrt` Submodule <a name="`sentinelAlertRuleNrt` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleNrt <a name="SentinelAlertRuleNrt" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt azurerm_sentinel_alert_rule_nrt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrt(scope: Construct, id: string, config: SentinelAlertRuleNrtConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig">SentinelAlertRuleNrtConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig">SentinelAlertRuleNrtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putAlertDetailsOverride">putAlertDetailsOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEntityMapping">putEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEventGrouping">putEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putIncident">putIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putSentinelEntityMapping">putSentinelEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertDetailsOverride">resetAlertDetailsOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateGuid">resetAlertRuleTemplateGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateVersion">resetAlertRuleTemplateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetCustomDetails">resetCustomDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEntityMapping">resetEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetIncident">resetIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSentinelEntityMapping">resetSentinelEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionDuration">resetSuppressionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionEnabled">resetSuppressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTactics">resetTactics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTechniques">resetTechniques</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlertDetailsOverride` <a name="putAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putAlertDetailsOverride"></a>

```typescript
public putAlertDetailsOverride(value: IResolvable | SentinelAlertRuleNrtAlertDetailsOverride[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putAlertDetailsOverride.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>[]

---

##### `putEntityMapping` <a name="putEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEntityMapping"></a>

```typescript
public putEntityMapping(value: IResolvable | SentinelAlertRuleNrtEntityMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEntityMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>[]

---

##### `putEventGrouping` <a name="putEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEventGrouping"></a>

```typescript
public putEventGrouping(value: SentinelAlertRuleNrtEventGrouping): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEventGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

---

##### `putIncident` <a name="putIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putIncident"></a>

```typescript
public putIncident(value: SentinelAlertRuleNrtIncident): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putIncident.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

---

##### `putSentinelEntityMapping` <a name="putSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putSentinelEntityMapping"></a>

```typescript
public putSentinelEntityMapping(value: IResolvable | SentinelAlertRuleNrtSentinelEntityMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putSentinelEntityMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelAlertRuleNrtTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

---

##### `resetAlertDetailsOverride` <a name="resetAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertDetailsOverride"></a>

```typescript
public resetAlertDetailsOverride(): void
```

##### `resetAlertRuleTemplateGuid` <a name="resetAlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateGuid"></a>

```typescript
public resetAlertRuleTemplateGuid(): void
```

##### `resetAlertRuleTemplateVersion` <a name="resetAlertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateVersion"></a>

```typescript
public resetAlertRuleTemplateVersion(): void
```

##### `resetCustomDetails` <a name="resetCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetCustomDetails"></a>

```typescript
public resetCustomDetails(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEntityMapping` <a name="resetEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEntityMapping"></a>

```typescript
public resetEntityMapping(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncident` <a name="resetIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetIncident"></a>

```typescript
public resetIncident(): void
```

##### `resetSentinelEntityMapping` <a name="resetSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSentinelEntityMapping"></a>

```typescript
public resetSentinelEntityMapping(): void
```

##### `resetSuppressionDuration` <a name="resetSuppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionDuration"></a>

```typescript
public resetSuppressionDuration(): void
```

##### `resetSuppressionEnabled` <a name="resetSuppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionEnabled"></a>

```typescript
public resetSuppressionEnabled(): void
```

##### `resetTactics` <a name="resetTactics" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTactics"></a>

```typescript
public resetTactics(): void
```

##### `resetTechniques` <a name="resetTechniques" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTechniques"></a>

```typescript
public resetTechniques(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelAlertRuleNrt resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isConstruct"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

sentinelAlertRuleNrt.SentinelAlertRuleNrt.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformElement"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformResource"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SentinelAlertRuleNrt resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelAlertRuleNrt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelAlertRuleNrt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleNrt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverride">alertDetailsOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList">SentinelAlertRuleNrtAlertDetailsOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMapping">entityMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList">SentinelAlertRuleNrtEntityMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGrouping">eventGrouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference">SentinelAlertRuleNrtEventGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incident">incident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference">SentinelAlertRuleNrtIncidentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMapping">sentinelEntityMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList">SentinelAlertRuleNrtSentinelEntityMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference">SentinelAlertRuleNrtTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverrideInput">alertDetailsOverrideInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuidInput">alertRuleTemplateGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersionInput">alertRuleTemplateVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetailsInput">customDetailsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMappingInput">entityMappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGroupingInput">eventGroupingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incidentInput">incidentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMappingInput">sentinelEntityMappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDurationInput">suppressionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabledInput">suppressionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tacticsInput">tacticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniquesInput">techniquesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersion">alertRuleTemplateVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetails">customDetails</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDuration">suppressionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabled">suppressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tactics">tactics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniques">techniques</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alertDetailsOverride`<sup>Required</sup> <a name="alertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverride"></a>

```typescript
public readonly alertDetailsOverride: SentinelAlertRuleNrtAlertDetailsOverrideList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList">SentinelAlertRuleNrtAlertDetailsOverrideList</a>

---

##### `entityMapping`<sup>Required</sup> <a name="entityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMapping"></a>

```typescript
public readonly entityMapping: SentinelAlertRuleNrtEntityMappingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList">SentinelAlertRuleNrtEntityMappingList</a>

---

##### `eventGrouping`<sup>Required</sup> <a name="eventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGrouping"></a>

```typescript
public readonly eventGrouping: SentinelAlertRuleNrtEventGroupingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference">SentinelAlertRuleNrtEventGroupingOutputReference</a>

---

##### `incident`<sup>Required</sup> <a name="incident" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incident"></a>

```typescript
public readonly incident: SentinelAlertRuleNrtIncidentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference">SentinelAlertRuleNrtIncidentOutputReference</a>

---

##### `sentinelEntityMapping`<sup>Required</sup> <a name="sentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMapping"></a>

```typescript
public readonly sentinelEntityMapping: SentinelAlertRuleNrtSentinelEntityMappingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList">SentinelAlertRuleNrtSentinelEntityMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelAlertRuleNrtTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference">SentinelAlertRuleNrtTimeoutsOutputReference</a>

---

##### `alertDetailsOverrideInput`<sup>Optional</sup> <a name="alertDetailsOverrideInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverrideInput"></a>

```typescript
public readonly alertDetailsOverrideInput: IResolvable | SentinelAlertRuleNrtAlertDetailsOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>[]

---

##### `alertRuleTemplateGuidInput`<sup>Optional</sup> <a name="alertRuleTemplateGuidInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuidInput"></a>

```typescript
public readonly alertRuleTemplateGuidInput: string;
```

- *Type:* string

---

##### `alertRuleTemplateVersionInput`<sup>Optional</sup> <a name="alertRuleTemplateVersionInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersionInput"></a>

```typescript
public readonly alertRuleTemplateVersionInput: string;
```

- *Type:* string

---

##### `customDetailsInput`<sup>Optional</sup> <a name="customDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetailsInput"></a>

```typescript
public readonly customDetailsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entityMappingInput`<sup>Optional</sup> <a name="entityMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMappingInput"></a>

```typescript
public readonly entityMappingInput: IResolvable | SentinelAlertRuleNrtEntityMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>[]

---

##### `eventGroupingInput`<sup>Optional</sup> <a name="eventGroupingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGroupingInput"></a>

```typescript
public readonly eventGroupingInput: SentinelAlertRuleNrtEventGrouping;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `incidentInput`<sup>Optional</sup> <a name="incidentInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incidentInput"></a>

```typescript
public readonly incidentInput: SentinelAlertRuleNrtIncident;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `sentinelEntityMappingInput`<sup>Optional</sup> <a name="sentinelEntityMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMappingInput"></a>

```typescript
public readonly sentinelEntityMappingInput: IResolvable | SentinelAlertRuleNrtSentinelEntityMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>[]

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `suppressionDurationInput`<sup>Optional</sup> <a name="suppressionDurationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDurationInput"></a>

```typescript
public readonly suppressionDurationInput: string;
```

- *Type:* string

---

##### `suppressionEnabledInput`<sup>Optional</sup> <a name="suppressionEnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabledInput"></a>

```typescript
public readonly suppressionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tacticsInput`<sup>Optional</sup> <a name="tacticsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tacticsInput"></a>

```typescript
public readonly tacticsInput: string[];
```

- *Type:* string[]

---

##### `techniquesInput`<sup>Optional</sup> <a name="techniquesInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniquesInput"></a>

```typescript
public readonly techniquesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelAlertRuleNrtTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

---

##### `alertRuleTemplateGuid`<sup>Required</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuid"></a>

```typescript
public readonly alertRuleTemplateGuid: string;
```

- *Type:* string

---

##### `alertRuleTemplateVersion`<sup>Required</sup> <a name="alertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersion"></a>

```typescript
public readonly alertRuleTemplateVersion: string;
```

- *Type:* string

---

##### `customDetails`<sup>Required</sup> <a name="customDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetails"></a>

```typescript
public readonly customDetails: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `suppressionDuration`<sup>Required</sup> <a name="suppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDuration"></a>

```typescript
public readonly suppressionDuration: string;
```

- *Type:* string

---

##### `suppressionEnabled`<sup>Required</sup> <a name="suppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabled"></a>

```typescript
public readonly suppressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tactics`<sup>Required</sup> <a name="tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tactics"></a>

```typescript
public readonly tactics: string[];
```

- *Type:* string[]

---

##### `techniques`<sup>Required</sup> <a name="techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniques"></a>

```typescript
public readonly techniques: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleNrtAlertDetailsOverride <a name="SentinelAlertRuleNrtAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

const sentinelAlertRuleNrtAlertDetailsOverride: sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.descriptionFormat">descriptionFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#description_format SentinelAlertRuleNrt#description_format}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.displayNameFormat">displayNameFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#display_name_format SentinelAlertRuleNrt#display_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.dynamicProperty">dynamicProperty</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>[]</code> | dynamic_property block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.severityColumnName">severityColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#severity_column_name SentinelAlertRuleNrt#severity_column_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.tacticsColumnName">tacticsColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#tactics_column_name SentinelAlertRuleNrt#tactics_column_name}. |

---

##### `descriptionFormat`<sup>Optional</sup> <a name="descriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.descriptionFormat"></a>

```typescript
public readonly descriptionFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#description_format SentinelAlertRuleNrt#description_format}.

---

##### `displayNameFormat`<sup>Optional</sup> <a name="displayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.displayNameFormat"></a>

```typescript
public readonly displayNameFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#display_name_format SentinelAlertRuleNrt#display_name_format}.

---

##### `dynamicProperty`<sup>Optional</sup> <a name="dynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.dynamicProperty"></a>

```typescript
public readonly dynamicProperty: IResolvable | SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>[]

dynamic_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#dynamic_property SentinelAlertRuleNrt#dynamic_property}

---

##### `severityColumnName`<sup>Optional</sup> <a name="severityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.severityColumnName"></a>

```typescript
public readonly severityColumnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#severity_column_name SentinelAlertRuleNrt#severity_column_name}.

---

##### `tacticsColumnName`<sup>Optional</sup> <a name="tacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.tacticsColumnName"></a>

```typescript
public readonly tacticsColumnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#tactics_column_name SentinelAlertRuleNrt#tactics_column_name}.

---

### SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty <a name="SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

const sentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty: sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#value SentinelAlertRuleNrt#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#value SentinelAlertRuleNrt#value}.

---

### SentinelAlertRuleNrtConfig <a name="SentinelAlertRuleNrtConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

const sentinelAlertRuleNrtConfig: sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#display_name SentinelAlertRuleNrt#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.eventGrouping">eventGrouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a></code> | event_grouping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#log_analytics_workspace_id SentinelAlertRuleNrt#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#query SentinelAlertRuleNrt#query}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.severity">severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#severity SentinelAlertRuleNrt#severity}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertDetailsOverride">alertDetailsOverride</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>[]</code> | alert_details_override block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_guid SentinelAlertRuleNrt#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateVersion">alertRuleTemplateVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_version SentinelAlertRuleNrt#alert_rule_template_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.customDetails">customDetails</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#custom_details SentinelAlertRuleNrt#custom_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#description SentinelAlertRuleNrt#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.entityMapping">entityMapping</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>[]</code> | entity_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#id SentinelAlertRuleNrt#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.incident">incident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a></code> | incident block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.sentinelEntityMapping">sentinelEntityMapping</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>[]</code> | sentinel_entity_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionDuration">suppressionDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#suppression_duration SentinelAlertRuleNrt#suppression_duration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionEnabled">suppressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#suppression_enabled SentinelAlertRuleNrt#suppression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.tactics">tactics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#tactics SentinelAlertRuleNrt#tactics}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.techniques">techniques</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#techniques SentinelAlertRuleNrt#techniques}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#display_name SentinelAlertRuleNrt#display_name}.

---

##### `eventGrouping`<sup>Required</sup> <a name="eventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.eventGrouping"></a>

```typescript
public readonly eventGrouping: SentinelAlertRuleNrtEventGrouping;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

event_grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#event_grouping SentinelAlertRuleNrt#event_grouping}

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#log_analytics_workspace_id SentinelAlertRuleNrt#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#query SentinelAlertRuleNrt#query}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#severity SentinelAlertRuleNrt#severity}.

---

##### `alertDetailsOverride`<sup>Optional</sup> <a name="alertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertDetailsOverride"></a>

```typescript
public readonly alertDetailsOverride: IResolvable | SentinelAlertRuleNrtAlertDetailsOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>[]

alert_details_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#alert_details_override SentinelAlertRuleNrt#alert_details_override}

---

##### `alertRuleTemplateGuid`<sup>Optional</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateGuid"></a>

```typescript
public readonly alertRuleTemplateGuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_guid SentinelAlertRuleNrt#alert_rule_template_guid}.

---

##### `alertRuleTemplateVersion`<sup>Optional</sup> <a name="alertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateVersion"></a>

```typescript
public readonly alertRuleTemplateVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_version SentinelAlertRuleNrt#alert_rule_template_version}.

---

##### `customDetails`<sup>Optional</sup> <a name="customDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.customDetails"></a>

```typescript
public readonly customDetails: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#custom_details SentinelAlertRuleNrt#custom_details}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#description SentinelAlertRuleNrt#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}.

---

##### `entityMapping`<sup>Optional</sup> <a name="entityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.entityMapping"></a>

```typescript
public readonly entityMapping: IResolvable | SentinelAlertRuleNrtEntityMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>[]

entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#entity_mapping SentinelAlertRuleNrt#entity_mapping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#id SentinelAlertRuleNrt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incident`<sup>Optional</sup> <a name="incident" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.incident"></a>

```typescript
public readonly incident: SentinelAlertRuleNrtIncident;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#incident SentinelAlertRuleNrt#incident}

---

##### `sentinelEntityMapping`<sup>Optional</sup> <a name="sentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.sentinelEntityMapping"></a>

```typescript
public readonly sentinelEntityMapping: IResolvable | SentinelAlertRuleNrtSentinelEntityMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>[]

sentinel_entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#sentinel_entity_mapping SentinelAlertRuleNrt#sentinel_entity_mapping}

---

##### `suppressionDuration`<sup>Optional</sup> <a name="suppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionDuration"></a>

```typescript
public readonly suppressionDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#suppression_duration SentinelAlertRuleNrt#suppression_duration}.

---

##### `suppressionEnabled`<sup>Optional</sup> <a name="suppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionEnabled"></a>

```typescript
public readonly suppressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#suppression_enabled SentinelAlertRuleNrt#suppression_enabled}.

---

##### `tactics`<sup>Optional</sup> <a name="tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.tactics"></a>

```typescript
public readonly tactics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#tactics SentinelAlertRuleNrt#tactics}.

---

##### `techniques`<sup>Optional</sup> <a name="techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.techniques"></a>

```typescript
public readonly techniques: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#techniques SentinelAlertRuleNrt#techniques}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelAlertRuleNrtTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#timeouts SentinelAlertRuleNrt#timeouts}

---

### SentinelAlertRuleNrtEntityMapping <a name="SentinelAlertRuleNrtEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

const sentinelAlertRuleNrtEntityMapping: sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#entity_type SentinelAlertRuleNrt#entity_type}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.fieldMapping">fieldMapping</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>[]</code> | field_mapping block. |

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#entity_type SentinelAlertRuleNrt#entity_type}.

---

##### `fieldMapping`<sup>Required</sup> <a name="fieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.fieldMapping"></a>

```typescript
public readonly fieldMapping: IResolvable | SentinelAlertRuleNrtEntityMappingFieldMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>[]

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#field_mapping SentinelAlertRuleNrt#field_mapping}

---

### SentinelAlertRuleNrtEntityMappingFieldMapping <a name="SentinelAlertRuleNrtEntityMappingFieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

const sentinelAlertRuleNrtEntityMappingFieldMapping: sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#identifier SentinelAlertRuleNrt#identifier}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#identifier SentinelAlertRuleNrt#identifier}.

---

### SentinelAlertRuleNrtEventGrouping <a name="SentinelAlertRuleNrtEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

const sentinelAlertRuleNrtEventGrouping: sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping.property.aggregationMethod">aggregationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#aggregation_method SentinelAlertRuleNrt#aggregation_method}. |

---

##### `aggregationMethod`<sup>Required</sup> <a name="aggregationMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping.property.aggregationMethod"></a>

```typescript
public readonly aggregationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#aggregation_method SentinelAlertRuleNrt#aggregation_method}.

---

### SentinelAlertRuleNrtIncident <a name="SentinelAlertRuleNrtIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

const sentinelAlertRuleNrtIncident: sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.createIncidentEnabled">createIncidentEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#create_incident_enabled SentinelAlertRuleNrt#create_incident_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.grouping">grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a></code> | grouping block. |

---

##### `createIncidentEnabled`<sup>Required</sup> <a name="createIncidentEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.createIncidentEnabled"></a>

```typescript
public readonly createIncidentEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#create_incident_enabled SentinelAlertRuleNrt#create_incident_enabled}.

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.grouping"></a>

```typescript
public readonly grouping: SentinelAlertRuleNrtIncidentGrouping;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#grouping SentinelAlertRuleNrt#grouping}

---

### SentinelAlertRuleNrtIncidentGrouping <a name="SentinelAlertRuleNrtIncidentGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

const sentinelAlertRuleNrtIncidentGrouping: sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byAlertDetails">byAlertDetails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#by_alert_details SentinelAlertRuleNrt#by_alert_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byCustomDetails">byCustomDetails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#by_custom_details SentinelAlertRuleNrt#by_custom_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byEntities">byEntities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#by_entities SentinelAlertRuleNrt#by_entities}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.entityMatchingMethod">entityMatchingMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#entity_matching_method SentinelAlertRuleNrt#entity_matching_method}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.lookbackDuration">lookbackDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#lookback_duration SentinelAlertRuleNrt#lookback_duration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.reopenClosedIncidents">reopenClosedIncidents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#reopen_closed_incidents SentinelAlertRuleNrt#reopen_closed_incidents}. |

---

##### `byAlertDetails`<sup>Optional</sup> <a name="byAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byAlertDetails"></a>

```typescript
public readonly byAlertDetails: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#by_alert_details SentinelAlertRuleNrt#by_alert_details}.

---

##### `byCustomDetails`<sup>Optional</sup> <a name="byCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byCustomDetails"></a>

```typescript
public readonly byCustomDetails: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#by_custom_details SentinelAlertRuleNrt#by_custom_details}.

---

##### `byEntities`<sup>Optional</sup> <a name="byEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byEntities"></a>

```typescript
public readonly byEntities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#by_entities SentinelAlertRuleNrt#by_entities}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}.

---

##### `entityMatchingMethod`<sup>Optional</sup> <a name="entityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.entityMatchingMethod"></a>

```typescript
public readonly entityMatchingMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#entity_matching_method SentinelAlertRuleNrt#entity_matching_method}.

---

##### `lookbackDuration`<sup>Optional</sup> <a name="lookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.lookbackDuration"></a>

```typescript
public readonly lookbackDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#lookback_duration SentinelAlertRuleNrt#lookback_duration}.

---

##### `reopenClosedIncidents`<sup>Optional</sup> <a name="reopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.reopenClosedIncidents"></a>

```typescript
public readonly reopenClosedIncidents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#reopen_closed_incidents SentinelAlertRuleNrt#reopen_closed_incidents}.

---

### SentinelAlertRuleNrtSentinelEntityMapping <a name="SentinelAlertRuleNrtSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

const sentinelAlertRuleNrtSentinelEntityMapping: sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}.

---

### SentinelAlertRuleNrtTimeouts <a name="SentinelAlertRuleNrtTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

const sentinelAlertRuleNrtTimeouts: sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#create SentinelAlertRuleNrt#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#delete SentinelAlertRuleNrt#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#read SentinelAlertRuleNrt#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#update SentinelAlertRuleNrt#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#create SentinelAlertRuleNrt#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#delete SentinelAlertRuleNrt#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#read SentinelAlertRuleNrt#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/sentinel_alert_rule_nrt#update SentinelAlertRuleNrt#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList <a name="SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>[]

---


### SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference <a name="SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>

---


### SentinelAlertRuleNrtAlertDetailsOverrideList <a name="SentinelAlertRuleNrtAlertDetailsOverrideList" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleNrtAlertDetailsOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtAlertDetailsOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>[]

---


### SentinelAlertRuleNrtAlertDetailsOverrideOutputReference <a name="SentinelAlertRuleNrtAlertDetailsOverrideOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.putDynamicProperty">putDynamicProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDescriptionFormat">resetDescriptionFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDisplayNameFormat">resetDisplayNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDynamicProperty">resetDynamicProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetSeverityColumnName">resetSeverityColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetTacticsColumnName">resetTacticsColumnName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicProperty` <a name="putDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.putDynamicProperty"></a>

```typescript
public putDynamicProperty(value: IResolvable | SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.putDynamicProperty.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>[]

---

##### `resetDescriptionFormat` <a name="resetDescriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDescriptionFormat"></a>

```typescript
public resetDescriptionFormat(): void
```

##### `resetDisplayNameFormat` <a name="resetDisplayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDisplayNameFormat"></a>

```typescript
public resetDisplayNameFormat(): void
```

##### `resetDynamicProperty` <a name="resetDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDynamicProperty"></a>

```typescript
public resetDynamicProperty(): void
```

##### `resetSeverityColumnName` <a name="resetSeverityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetSeverityColumnName"></a>

```typescript
public resetSeverityColumnName(): void
```

##### `resetTacticsColumnName` <a name="resetTacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetTacticsColumnName"></a>

```typescript
public resetTacticsColumnName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicProperty">dynamicProperty</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList">SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormatInput">descriptionFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormatInput">displayNameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicPropertyInput">dynamicPropertyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnNameInput">severityColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnNameInput">tacticsColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormat">descriptionFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormat">displayNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnName">severityColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnName">tacticsColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicProperty`<sup>Required</sup> <a name="dynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicProperty"></a>

```typescript
public readonly dynamicProperty: SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList">SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList</a>

---

##### `descriptionFormatInput`<sup>Optional</sup> <a name="descriptionFormatInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormatInput"></a>

```typescript
public readonly descriptionFormatInput: string;
```

- *Type:* string

---

##### `displayNameFormatInput`<sup>Optional</sup> <a name="displayNameFormatInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormatInput"></a>

```typescript
public readonly displayNameFormatInput: string;
```

- *Type:* string

---

##### `dynamicPropertyInput`<sup>Optional</sup> <a name="dynamicPropertyInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicPropertyInput"></a>

```typescript
public readonly dynamicPropertyInput: IResolvable | SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>[]

---

##### `severityColumnNameInput`<sup>Optional</sup> <a name="severityColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnNameInput"></a>

```typescript
public readonly severityColumnNameInput: string;
```

- *Type:* string

---

##### `tacticsColumnNameInput`<sup>Optional</sup> <a name="tacticsColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnNameInput"></a>

```typescript
public readonly tacticsColumnNameInput: string;
```

- *Type:* string

---

##### `descriptionFormat`<sup>Required</sup> <a name="descriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormat"></a>

```typescript
public readonly descriptionFormat: string;
```

- *Type:* string

---

##### `displayNameFormat`<sup>Required</sup> <a name="displayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormat"></a>

```typescript
public readonly displayNameFormat: string;
```

- *Type:* string

---

##### `severityColumnName`<sup>Required</sup> <a name="severityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnName"></a>

```typescript
public readonly severityColumnName: string;
```

- *Type:* string

---

##### `tacticsColumnName`<sup>Required</sup> <a name="tacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnName"></a>

```typescript
public readonly tacticsColumnName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtAlertDetailsOverride;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>

---


### SentinelAlertRuleNrtEntityMappingFieldMappingList <a name="SentinelAlertRuleNrtEntityMappingFieldMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtEntityMappingFieldMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>[]

---


### SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference <a name="SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtEntityMappingFieldMapping;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>

---


### SentinelAlertRuleNrtEntityMappingList <a name="SentinelAlertRuleNrtEntityMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleNrtEntityMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtEntityMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>[]

---


### SentinelAlertRuleNrtEntityMappingOutputReference <a name="SentinelAlertRuleNrtEntityMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.putFieldMapping">putFieldMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldMapping` <a name="putFieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.putFieldMapping"></a>

```typescript
public putFieldMapping(value: IResolvable | SentinelAlertRuleNrtEntityMappingFieldMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMapping">fieldMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList">SentinelAlertRuleNrtEntityMappingFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMappingInput">fieldMappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldMapping`<sup>Required</sup> <a name="fieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMapping"></a>

```typescript
public readonly fieldMapping: SentinelAlertRuleNrtEntityMappingFieldMappingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList">SentinelAlertRuleNrtEntityMappingFieldMappingList</a>

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `fieldMappingInput`<sup>Optional</sup> <a name="fieldMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMappingInput"></a>

```typescript
public readonly fieldMappingInput: IResolvable | SentinelAlertRuleNrtEntityMappingFieldMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>[]

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtEntityMapping;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>

---


### SentinelAlertRuleNrtEventGroupingOutputReference <a name="SentinelAlertRuleNrtEventGroupingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethodInput">aggregationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethod">aggregationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationMethodInput`<sup>Optional</sup> <a name="aggregationMethodInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethodInput"></a>

```typescript
public readonly aggregationMethodInput: string;
```

- *Type:* string

---

##### `aggregationMethod`<sup>Required</sup> <a name="aggregationMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethod"></a>

```typescript
public readonly aggregationMethod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelAlertRuleNrtEventGrouping;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

---


### SentinelAlertRuleNrtIncidentGroupingOutputReference <a name="SentinelAlertRuleNrtIncidentGroupingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByAlertDetails">resetByAlertDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByCustomDetails">resetByCustomDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByEntities">resetByEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEntityMatchingMethod">resetEntityMatchingMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetLookbackDuration">resetLookbackDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetReopenClosedIncidents">resetReopenClosedIncidents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetByAlertDetails` <a name="resetByAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByAlertDetails"></a>

```typescript
public resetByAlertDetails(): void
```

##### `resetByCustomDetails` <a name="resetByCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByCustomDetails"></a>

```typescript
public resetByCustomDetails(): void
```

##### `resetByEntities` <a name="resetByEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByEntities"></a>

```typescript
public resetByEntities(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEntityMatchingMethod` <a name="resetEntityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEntityMatchingMethod"></a>

```typescript
public resetEntityMatchingMethod(): void
```

##### `resetLookbackDuration` <a name="resetLookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetLookbackDuration"></a>

```typescript
public resetLookbackDuration(): void
```

##### `resetReopenClosedIncidents` <a name="resetReopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetReopenClosedIncidents"></a>

```typescript
public resetReopenClosedIncidents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetailsInput">byAlertDetailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetailsInput">byCustomDetailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntitiesInput">byEntitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethodInput">entityMatchingMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDurationInput">lookbackDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidentsInput">reopenClosedIncidentsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetails">byAlertDetails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetails">byCustomDetails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntities">byEntities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethod">entityMatchingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDuration">lookbackDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidents">reopenClosedIncidents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `byAlertDetailsInput`<sup>Optional</sup> <a name="byAlertDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetailsInput"></a>

```typescript
public readonly byAlertDetailsInput: string[];
```

- *Type:* string[]

---

##### `byCustomDetailsInput`<sup>Optional</sup> <a name="byCustomDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetailsInput"></a>

```typescript
public readonly byCustomDetailsInput: string[];
```

- *Type:* string[]

---

##### `byEntitiesInput`<sup>Optional</sup> <a name="byEntitiesInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntitiesInput"></a>

```typescript
public readonly byEntitiesInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entityMatchingMethodInput`<sup>Optional</sup> <a name="entityMatchingMethodInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethodInput"></a>

```typescript
public readonly entityMatchingMethodInput: string;
```

- *Type:* string

---

##### `lookbackDurationInput`<sup>Optional</sup> <a name="lookbackDurationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDurationInput"></a>

```typescript
public readonly lookbackDurationInput: string;
```

- *Type:* string

---

##### `reopenClosedIncidentsInput`<sup>Optional</sup> <a name="reopenClosedIncidentsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidentsInput"></a>

```typescript
public readonly reopenClosedIncidentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `byAlertDetails`<sup>Required</sup> <a name="byAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetails"></a>

```typescript
public readonly byAlertDetails: string[];
```

- *Type:* string[]

---

##### `byCustomDetails`<sup>Required</sup> <a name="byCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetails"></a>

```typescript
public readonly byCustomDetails: string[];
```

- *Type:* string[]

---

##### `byEntities`<sup>Required</sup> <a name="byEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntities"></a>

```typescript
public readonly byEntities: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entityMatchingMethod`<sup>Required</sup> <a name="entityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethod"></a>

```typescript
public readonly entityMatchingMethod: string;
```

- *Type:* string

---

##### `lookbackDuration`<sup>Required</sup> <a name="lookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDuration"></a>

```typescript
public readonly lookbackDuration: string;
```

- *Type:* string

---

##### `reopenClosedIncidents`<sup>Required</sup> <a name="reopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidents"></a>

```typescript
public readonly reopenClosedIncidents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelAlertRuleNrtIncidentGrouping;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

---


### SentinelAlertRuleNrtIncidentOutputReference <a name="SentinelAlertRuleNrtIncidentOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.putGrouping">putGrouping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrouping` <a name="putGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.putGrouping"></a>

```typescript
public putGrouping(value: SentinelAlertRuleNrtIncidentGrouping): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.putGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.grouping">grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference">SentinelAlertRuleNrtIncidentGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabledInput">createIncidentEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.groupingInput">groupingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabled">createIncidentEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.grouping"></a>

```typescript
public readonly grouping: SentinelAlertRuleNrtIncidentGroupingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference">SentinelAlertRuleNrtIncidentGroupingOutputReference</a>

---

##### `createIncidentEnabledInput`<sup>Optional</sup> <a name="createIncidentEnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabledInput"></a>

```typescript
public readonly createIncidentEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupingInput`<sup>Optional</sup> <a name="groupingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.groupingInput"></a>

```typescript
public readonly groupingInput: SentinelAlertRuleNrtIncidentGrouping;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

---

##### `createIncidentEnabled`<sup>Required</sup> <a name="createIncidentEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabled"></a>

```typescript
public readonly createIncidentEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelAlertRuleNrtIncident;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

---


### SentinelAlertRuleNrtSentinelEntityMappingList <a name="SentinelAlertRuleNrtSentinelEntityMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.get"></a>

```typescript
public get(index: number): SentinelAlertRuleNrtSentinelEntityMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtSentinelEntityMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>[]

---


### SentinelAlertRuleNrtSentinelEntityMappingOutputReference <a name="SentinelAlertRuleNrtSentinelEntityMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtSentinelEntityMapping;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>

---


### SentinelAlertRuleNrtTimeoutsOutputReference <a name="SentinelAlertRuleNrtTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleNrt } from '@cdktf/provider-azurerm'

new sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelAlertRuleNrtTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

---



