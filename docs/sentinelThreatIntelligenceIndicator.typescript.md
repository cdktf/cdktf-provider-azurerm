# `azurerm_sentinel_threat_intelligence_indicator`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_threat_intelligence_indicator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator).

# `sentinelThreatIntelligenceIndicator` Submodule <a name="`sentinelThreatIntelligenceIndicator` Submodule" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelThreatIntelligenceIndicator <a name="SentinelThreatIntelligenceIndicator" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator azurerm_sentinel_threat_intelligence_indicator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator(scope: Construct, id: string, config: SentinelThreatIntelligenceIndicatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig">SentinelThreatIntelligenceIndicatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig">SentinelThreatIntelligenceIndicatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putExternalReference">putExternalReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putGranularMarking">putGranularMarking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putKillChainPhase">putKillChainPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetConfidence">resetConfidence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExternalReference">resetExternalReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetGranularMarking">resetGranularMarking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetKillChainPhase">resetKillChainPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetObjectMarkingRefs">resetObjectMarkingRefs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetPatternVersion">resetPatternVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetRevoked">resetRevoked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetThreatTypes">resetThreatTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetValidateUntilUtc">resetValidateUntilUtc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putExternalReference` <a name="putExternalReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putExternalReference"></a>

```typescript
public putExternalReference(value: IResolvable | SentinelThreatIntelligenceIndicatorExternalReference[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putExternalReference.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference">SentinelThreatIntelligenceIndicatorExternalReference</a>[]

---

##### `putGranularMarking` <a name="putGranularMarking" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putGranularMarking"></a>

```typescript
public putGranularMarking(value: IResolvable | SentinelThreatIntelligenceIndicatorGranularMarking[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putGranularMarking.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking">SentinelThreatIntelligenceIndicatorGranularMarking</a>[]

---

##### `putKillChainPhase` <a name="putKillChainPhase" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putKillChainPhase"></a>

```typescript
public putKillChainPhase(value: IResolvable | SentinelThreatIntelligenceIndicatorKillChainPhase[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putKillChainPhase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase">SentinelThreatIntelligenceIndicatorKillChainPhase</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelThreatIntelligenceIndicatorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a>

---

##### `resetConfidence` <a name="resetConfidence" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetConfidence"></a>

```typescript
public resetConfidence(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExtension"></a>

```typescript
public resetExtension(): void
```

##### `resetExternalReference` <a name="resetExternalReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExternalReference"></a>

```typescript
public resetExternalReference(): void
```

##### `resetGranularMarking` <a name="resetGranularMarking" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetGranularMarking"></a>

```typescript
public resetGranularMarking(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKillChainPhase` <a name="resetKillChainPhase" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetKillChainPhase"></a>

```typescript
public resetKillChainPhase(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetObjectMarkingRefs` <a name="resetObjectMarkingRefs" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetObjectMarkingRefs"></a>

```typescript
public resetObjectMarkingRefs(): void
```

##### `resetPatternVersion` <a name="resetPatternVersion" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetPatternVersion"></a>

```typescript
public resetPatternVersion(): void
```

##### `resetRevoked` <a name="resetRevoked" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetRevoked"></a>

```typescript
public resetRevoked(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThreatTypes` <a name="resetThreatTypes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetThreatTypes"></a>

```typescript
public resetThreatTypes(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidateUntilUtc` <a name="resetValidateUntilUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetValidateUntilUtc"></a>

```typescript
public resetValidateUntilUtc(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isConstruct"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformElement"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformResource"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.defanged">defanged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalLastUpdatedTimeUtc">externalLastUpdatedTimeUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReference">externalReference</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList">SentinelThreatIntelligenceIndicatorExternalReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarking">granularMarking</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList">SentinelThreatIntelligenceIndicatorGranularMarkingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.indicatorType">indicatorType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhase">killChainPhase</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList">SentinelThreatIntelligenceIndicatorKillChainPhaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lastUpdatedTimeUtc">lastUpdatedTimeUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.parsedPattern">parsedPattern</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList">SentinelThreatIntelligenceIndicatorParsedPatternList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference">SentinelThreatIntelligenceIndicatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidenceInput">confidenceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extensionInput">extensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReferenceInput">externalReferenceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference">SentinelThreatIntelligenceIndicatorExternalReference</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarkingInput">granularMarkingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking">SentinelThreatIntelligenceIndicatorGranularMarking</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhaseInput">killChainPhaseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase">SentinelThreatIntelligenceIndicatorKillChainPhase</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefsInput">objectMarkingRefsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternTypeInput">patternTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersionInput">patternVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revokedInput">revokedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypesInput">threatTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtcInput">validateFromUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtcInput">validateUntilUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidence">confidence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extension">extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefs">objectMarkingRefs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternType">patternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersion">patternVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revoked">revoked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypes">threatTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtc">validateFromUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtc">validateUntilUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `defanged`<sup>Required</sup> <a name="defanged" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.defanged"></a>

```typescript
public readonly defanged: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `externalLastUpdatedTimeUtc`<sup>Required</sup> <a name="externalLastUpdatedTimeUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalLastUpdatedTimeUtc"></a>

```typescript
public readonly externalLastUpdatedTimeUtc: string;
```

- *Type:* string

---

##### `externalReference`<sup>Required</sup> <a name="externalReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReference"></a>

```typescript
public readonly externalReference: SentinelThreatIntelligenceIndicatorExternalReferenceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList">SentinelThreatIntelligenceIndicatorExternalReferenceList</a>

---

##### `granularMarking`<sup>Required</sup> <a name="granularMarking" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarking"></a>

```typescript
public readonly granularMarking: SentinelThreatIntelligenceIndicatorGranularMarkingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList">SentinelThreatIntelligenceIndicatorGranularMarkingList</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `indicatorType`<sup>Required</sup> <a name="indicatorType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.indicatorType"></a>

```typescript
public readonly indicatorType: string[];
```

- *Type:* string[]

---

##### `killChainPhase`<sup>Required</sup> <a name="killChainPhase" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhase"></a>

```typescript
public readonly killChainPhase: SentinelThreatIntelligenceIndicatorKillChainPhaseList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList">SentinelThreatIntelligenceIndicatorKillChainPhaseList</a>

---

##### `lastUpdatedTimeUtc`<sup>Required</sup> <a name="lastUpdatedTimeUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lastUpdatedTimeUtc"></a>

```typescript
public readonly lastUpdatedTimeUtc: string;
```

- *Type:* string

---

##### `parsedPattern`<sup>Required</sup> <a name="parsedPattern" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.parsedPattern"></a>

```typescript
public readonly parsedPattern: SentinelThreatIntelligenceIndicatorParsedPatternList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList">SentinelThreatIntelligenceIndicatorParsedPatternList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelThreatIntelligenceIndicatorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference">SentinelThreatIntelligenceIndicatorTimeoutsOutputReference</a>

---

##### `confidenceInput`<sup>Optional</sup> <a name="confidenceInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidenceInput"></a>

```typescript
public readonly confidenceInput: number;
```

- *Type:* number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extensionInput"></a>

```typescript
public readonly extensionInput: string;
```

- *Type:* string

---

##### `externalReferenceInput`<sup>Optional</sup> <a name="externalReferenceInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReferenceInput"></a>

```typescript
public readonly externalReferenceInput: IResolvable | SentinelThreatIntelligenceIndicatorExternalReference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference">SentinelThreatIntelligenceIndicatorExternalReference</a>[]

---

##### `granularMarkingInput`<sup>Optional</sup> <a name="granularMarkingInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarkingInput"></a>

```typescript
public readonly granularMarkingInput: IResolvable | SentinelThreatIntelligenceIndicatorGranularMarking[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking">SentinelThreatIntelligenceIndicatorGranularMarking</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `killChainPhaseInput`<sup>Optional</sup> <a name="killChainPhaseInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhaseInput"></a>

```typescript
public readonly killChainPhaseInput: IResolvable | SentinelThreatIntelligenceIndicatorKillChainPhase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase">SentinelThreatIntelligenceIndicatorKillChainPhase</a>[]

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `objectMarkingRefsInput`<sup>Optional</sup> <a name="objectMarkingRefsInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefsInput"></a>

```typescript
public readonly objectMarkingRefsInput: string[];
```

- *Type:* string[]

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `patternTypeInput`<sup>Optional</sup> <a name="patternTypeInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternTypeInput"></a>

```typescript
public readonly patternTypeInput: string;
```

- *Type:* string

---

##### `patternVersionInput`<sup>Optional</sup> <a name="patternVersionInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersionInput"></a>

```typescript
public readonly patternVersionInput: string;
```

- *Type:* string

---

##### `revokedInput`<sup>Optional</sup> <a name="revokedInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revokedInput"></a>

```typescript
public readonly revokedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `threatTypesInput`<sup>Optional</sup> <a name="threatTypesInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypesInput"></a>

```typescript
public readonly threatTypesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelThreatIntelligenceIndicatorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a>

---

##### `validateFromUtcInput`<sup>Optional</sup> <a name="validateFromUtcInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtcInput"></a>

```typescript
public readonly validateFromUtcInput: string;
```

- *Type:* string

---

##### `validateUntilUtcInput`<sup>Optional</sup> <a name="validateUntilUtcInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtcInput"></a>

```typescript
public readonly validateUntilUtcInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `confidence`<sup>Required</sup> <a name="confidence" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidence"></a>

```typescript
public readonly confidence: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `objectMarkingRefs`<sup>Required</sup> <a name="objectMarkingRefs" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefs"></a>

```typescript
public readonly objectMarkingRefs: string[];
```

- *Type:* string[]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternType"></a>

```typescript
public readonly patternType: string;
```

- *Type:* string

---

##### `patternVersion`<sup>Required</sup> <a name="patternVersion" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersion"></a>

```typescript
public readonly patternVersion: string;
```

- *Type:* string

---

##### `revoked`<sup>Required</sup> <a name="revoked" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revoked"></a>

```typescript
public readonly revoked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `threatTypes`<sup>Required</sup> <a name="threatTypes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypes"></a>

```typescript
public readonly threatTypes: string[];
```

- *Type:* string[]

---

##### `validateFromUtc`<sup>Required</sup> <a name="validateFromUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtc"></a>

```typescript
public readonly validateFromUtc: string;
```

- *Type:* string

---

##### `validateUntilUtc`<sup>Required</sup> <a name="validateUntilUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtc"></a>

```typescript
public readonly validateUntilUtc: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelThreatIntelligenceIndicatorConfig <a name="SentinelThreatIntelligenceIndicatorConfig" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

const sentinelThreatIntelligenceIndicatorConfig: sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#display_name SentinelThreatIntelligenceIndicator#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#pattern SentinelThreatIntelligenceIndicator#pattern}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternType">patternType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_type SentinelThreatIntelligenceIndicator#pattern_type}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#source SentinelThreatIntelligenceIndicator#source}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateFromUtc">validateFromUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#validate_from_utc SentinelThreatIntelligenceIndicator#validate_from_utc}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#workspace_id SentinelThreatIntelligenceIndicator#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.confidence">confidence</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#confidence SentinelThreatIntelligenceIndicator#confidence}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.createdBy">createdBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#created_by SentinelThreatIntelligenceIndicator#created_by}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.extension">extension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#extension SentinelThreatIntelligenceIndicator#extension}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.externalReference">externalReference</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference">SentinelThreatIntelligenceIndicatorExternalReference</a>[]</code> | external_reference block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.granularMarking">granularMarking</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking">SentinelThreatIntelligenceIndicatorGranularMarking</a>[]</code> | granular_marking block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#id SentinelThreatIntelligenceIndicator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.killChainPhase">killChainPhase</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase">SentinelThreatIntelligenceIndicatorKillChainPhase</a>[]</code> | kill_chain_phase block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.objectMarkingRefs">objectMarkingRefs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#object_marking_refs SentinelThreatIntelligenceIndicator#object_marking_refs}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternVersion">patternVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_version SentinelThreatIntelligenceIndicator#pattern_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.revoked">revoked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#revoked SentinelThreatIntelligenceIndicator#revoked}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#tags SentinelThreatIntelligenceIndicator#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.threatTypes">threatTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#threat_types SentinelThreatIntelligenceIndicator#threat_types}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateUntilUtc">validateUntilUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#validate_until_utc SentinelThreatIntelligenceIndicator#validate_until_utc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#display_name SentinelThreatIntelligenceIndicator#display_name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#pattern SentinelThreatIntelligenceIndicator#pattern}.

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternType"></a>

```typescript
public readonly patternType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_type SentinelThreatIntelligenceIndicator#pattern_type}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#source SentinelThreatIntelligenceIndicator#source}.

---

##### `validateFromUtc`<sup>Required</sup> <a name="validateFromUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateFromUtc"></a>

```typescript
public readonly validateFromUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#validate_from_utc SentinelThreatIntelligenceIndicator#validate_from_utc}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#workspace_id SentinelThreatIntelligenceIndicator#workspace_id}.

---

##### `confidence`<sup>Optional</sup> <a name="confidence" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.confidence"></a>

```typescript
public readonly confidence: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#confidence SentinelThreatIntelligenceIndicator#confidence}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#created_by SentinelThreatIntelligenceIndicator#created_by}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#extension SentinelThreatIntelligenceIndicator#extension}.

---

##### `externalReference`<sup>Optional</sup> <a name="externalReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.externalReference"></a>

```typescript
public readonly externalReference: IResolvable | SentinelThreatIntelligenceIndicatorExternalReference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference">SentinelThreatIntelligenceIndicatorExternalReference</a>[]

external_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#external_reference SentinelThreatIntelligenceIndicator#external_reference}

---

##### `granularMarking`<sup>Optional</sup> <a name="granularMarking" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.granularMarking"></a>

```typescript
public readonly granularMarking: IResolvable | SentinelThreatIntelligenceIndicatorGranularMarking[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking">SentinelThreatIntelligenceIndicatorGranularMarking</a>[]

granular_marking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#granular_marking SentinelThreatIntelligenceIndicator#granular_marking}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#id SentinelThreatIntelligenceIndicator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `killChainPhase`<sup>Optional</sup> <a name="killChainPhase" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.killChainPhase"></a>

```typescript
public readonly killChainPhase: IResolvable | SentinelThreatIntelligenceIndicatorKillChainPhase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase">SentinelThreatIntelligenceIndicatorKillChainPhase</a>[]

kill_chain_phase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#kill_chain_phase SentinelThreatIntelligenceIndicator#kill_chain_phase}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}.

---

##### `objectMarkingRefs`<sup>Optional</sup> <a name="objectMarkingRefs" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.objectMarkingRefs"></a>

```typescript
public readonly objectMarkingRefs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#object_marking_refs SentinelThreatIntelligenceIndicator#object_marking_refs}.

---

##### `patternVersion`<sup>Optional</sup> <a name="patternVersion" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternVersion"></a>

```typescript
public readonly patternVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_version SentinelThreatIntelligenceIndicator#pattern_version}.

---

##### `revoked`<sup>Optional</sup> <a name="revoked" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.revoked"></a>

```typescript
public readonly revoked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#revoked SentinelThreatIntelligenceIndicator#revoked}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#tags SentinelThreatIntelligenceIndicator#tags}.

---

##### `threatTypes`<sup>Optional</sup> <a name="threatTypes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.threatTypes"></a>

```typescript
public readonly threatTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#threat_types SentinelThreatIntelligenceIndicator#threat_types}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelThreatIntelligenceIndicatorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#timeouts SentinelThreatIntelligenceIndicator#timeouts}

---

##### `validateUntilUtc`<sup>Optional</sup> <a name="validateUntilUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateUntilUtc"></a>

```typescript
public readonly validateUntilUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#validate_until_utc SentinelThreatIntelligenceIndicator#validate_until_utc}.

---

### SentinelThreatIntelligenceIndicatorExternalReference <a name="SentinelThreatIntelligenceIndicatorExternalReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

const sentinelThreatIntelligenceIndicatorExternalReference: sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.hashes">hashes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#hashes SentinelThreatIntelligenceIndicator#hashes}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.sourceName">sourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#source_name SentinelThreatIntelligenceIndicator#source_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#url SentinelThreatIntelligenceIndicator#url}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}.

---

##### `hashes`<sup>Optional</sup> <a name="hashes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.hashes"></a>

```typescript
public readonly hashes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#hashes SentinelThreatIntelligenceIndicator#hashes}.

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#source_name SentinelThreatIntelligenceIndicator#source_name}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#url SentinelThreatIntelligenceIndicator#url}.

---

### SentinelThreatIntelligenceIndicatorGranularMarking <a name="SentinelThreatIntelligenceIndicatorGranularMarking" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

const sentinelThreatIntelligenceIndicatorGranularMarking: sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.markingRef">markingRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#marking_ref SentinelThreatIntelligenceIndicator#marking_ref}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.selectors">selectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#selectors SentinelThreatIntelligenceIndicator#selectors}. |

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}.

---

##### `markingRef`<sup>Optional</sup> <a name="markingRef" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.markingRef"></a>

```typescript
public readonly markingRef: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#marking_ref SentinelThreatIntelligenceIndicator#marking_ref}.

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.selectors"></a>

```typescript
public readonly selectors: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#selectors SentinelThreatIntelligenceIndicator#selectors}.

---

### SentinelThreatIntelligenceIndicatorKillChainPhase <a name="SentinelThreatIntelligenceIndicatorKillChainPhase" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

const sentinelThreatIntelligenceIndicatorKillChainPhase: sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#name SentinelThreatIntelligenceIndicator#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#name SentinelThreatIntelligenceIndicator#name}.

---

### SentinelThreatIntelligenceIndicatorParsedPattern <a name="SentinelThreatIntelligenceIndicatorParsedPattern" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

const sentinelThreatIntelligenceIndicatorParsedPattern: sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern = { ... }
```


### SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues <a name="SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

const sentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues: sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues = { ... }
```


### SentinelThreatIntelligenceIndicatorTimeouts <a name="SentinelThreatIntelligenceIndicatorTimeouts" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

const sentinelThreatIntelligenceIndicatorTimeouts: sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#create SentinelThreatIntelligenceIndicator#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#delete SentinelThreatIntelligenceIndicator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#read SentinelThreatIntelligenceIndicator#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#update SentinelThreatIntelligenceIndicator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#create SentinelThreatIntelligenceIndicator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#delete SentinelThreatIntelligenceIndicator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#read SentinelThreatIntelligenceIndicator#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_threat_intelligence_indicator#update SentinelThreatIntelligenceIndicator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelThreatIntelligenceIndicatorExternalReferenceList <a name="SentinelThreatIntelligenceIndicatorExternalReferenceList" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.get"></a>

```typescript
public get(index: number): SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference">SentinelThreatIntelligenceIndicatorExternalReference</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelThreatIntelligenceIndicatorExternalReference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference">SentinelThreatIntelligenceIndicatorExternalReference</a>[]

---


### SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference <a name="SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetHashes">resetHashes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetSourceName">resetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHashes` <a name="resetHashes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetHashes"></a>

```typescript
public resetHashes(): void
```

##### `resetSourceName` <a name="resetSourceName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetSourceName"></a>

```typescript
public resetSourceName(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashesInput">hashesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashes">hashes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference">SentinelThreatIntelligenceIndicatorExternalReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hashesInput`<sup>Optional</sup> <a name="hashesInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashesInput"></a>

```typescript
public readonly hashesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hashes`<sup>Required</sup> <a name="hashes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashes"></a>

```typescript
public readonly hashes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelThreatIntelligenceIndicatorExternalReference;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference">SentinelThreatIntelligenceIndicatorExternalReference</a>

---


### SentinelThreatIntelligenceIndicatorGranularMarkingList <a name="SentinelThreatIntelligenceIndicatorGranularMarkingList" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.get"></a>

```typescript
public get(index: number): SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking">SentinelThreatIntelligenceIndicatorGranularMarking</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelThreatIntelligenceIndicatorGranularMarking[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking">SentinelThreatIntelligenceIndicatorGranularMarking</a>[]

---


### SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference <a name="SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetMarkingRef">resetMarkingRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetSelectors">resetSelectors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetMarkingRef` <a name="resetMarkingRef" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetMarkingRef"></a>

```typescript
public resetMarkingRef(): void
```

##### `resetSelectors` <a name="resetSelectors" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetSelectors"></a>

```typescript
public resetSelectors(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRefInput">markingRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRef">markingRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectors">selectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking">SentinelThreatIntelligenceIndicatorGranularMarking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `markingRefInput`<sup>Optional</sup> <a name="markingRefInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRefInput"></a>

```typescript
public readonly markingRefInput: string;
```

- *Type:* string

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectorsInput"></a>

```typescript
public readonly selectorsInput: string[];
```

- *Type:* string[]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `markingRef`<sup>Required</sup> <a name="markingRef" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRef"></a>

```typescript
public readonly markingRef: string;
```

- *Type:* string

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectors"></a>

```typescript
public readonly selectors: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelThreatIntelligenceIndicatorGranularMarking;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking">SentinelThreatIntelligenceIndicatorGranularMarking</a>

---


### SentinelThreatIntelligenceIndicatorKillChainPhaseList <a name="SentinelThreatIntelligenceIndicatorKillChainPhaseList" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.get"></a>

```typescript
public get(index: number): SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase">SentinelThreatIntelligenceIndicatorKillChainPhase</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelThreatIntelligenceIndicatorKillChainPhase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase">SentinelThreatIntelligenceIndicatorKillChainPhase</a>[]

---


### SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference <a name="SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase">SentinelThreatIntelligenceIndicatorKillChainPhase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelThreatIntelligenceIndicatorKillChainPhase;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase">SentinelThreatIntelligenceIndicatorKillChainPhase</a>

---


### SentinelThreatIntelligenceIndicatorParsedPatternList <a name="SentinelThreatIntelligenceIndicatorParsedPatternList" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.get"></a>

```typescript
public get(index: number): SentinelThreatIntelligenceIndicatorParsedPatternOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SentinelThreatIntelligenceIndicatorParsedPatternOutputReference <a name="SentinelThreatIntelligenceIndicatorParsedPatternOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeKey">patternTypeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeValues">patternTypeValues</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern">SentinelThreatIntelligenceIndicatorParsedPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patternTypeKey`<sup>Required</sup> <a name="patternTypeKey" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeKey"></a>

```typescript
public readonly patternTypeKey: string;
```

- *Type:* string

---

##### `patternTypeValues`<sup>Required</sup> <a name="patternTypeValues" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeValues"></a>

```typescript
public readonly patternTypeValues: SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelThreatIntelligenceIndicatorParsedPattern;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern">SentinelThreatIntelligenceIndicatorParsedPattern</a>

---


### SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList <a name="SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.get"></a>

```typescript
public get(index: number): SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference <a name="SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues</a>

---


### SentinelThreatIntelligenceIndicatorTimeoutsOutputReference <a name="SentinelThreatIntelligenceIndicatorTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelThreatIntelligenceIndicator } from '@cdktf/provider-azurerm'

new sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelThreatIntelligenceIndicatorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a>

---



