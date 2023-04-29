# `azurerm_cdn_frontdoor_origin_group`

Refer to the Terraform Registory for docs: [`azurerm_cdn_frontdoor_origin_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group).

# `cdnFrontdoorOriginGroup` Submodule <a name="`cdnFrontdoorOriginGroup` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorOriginGroup <a name="CdnFrontdoorOriginGroup" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group azurerm_cdn_frontdoor_origin_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

new cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup(scope: Construct, id: string, config: CdnFrontdoorOriginGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig">CdnFrontdoorOriginGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig">CdnFrontdoorOriginGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe">putHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing">putLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetHealthProbe">resetHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes">resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetSessionAffinityEnabled">resetSessionAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putHealthProbe` <a name="putHealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe"></a>

```typescript
public putHealthProbe(value: CdnFrontdoorOriginGroupHealthProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---

##### `putLoadBalancing` <a name="putLoadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing"></a>

```typescript
public putLoadBalancing(value: CdnFrontdoorOriginGroupLoadBalancing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: CdnFrontdoorOriginGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

---

##### `resetHealthProbe` <a name="resetHealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetHealthProbe"></a>

```typescript
public resetHealthProbe(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes` <a name="resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```typescript
public resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes(): void
```

##### `resetSessionAffinityEnabled` <a name="resetSessionAffinityEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetSessionAffinityEnabled"></a>

```typescript
public resetSessionAffinityEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbe">healthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference">CdnFrontdoorOriginGroupHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference">CdnFrontdoorOriginGroupLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference">CdnFrontdoorOriginGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileIdInput">cdnFrontdoorProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbeInput">healthProbeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancingInput">loadBalancingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutesInput">restoreTrafficTimeToHealedOrNewEndpointInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabledInput">sessionAffinityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes">restoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabled">sessionAffinityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `healthProbe`<sup>Required</sup> <a name="healthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbe"></a>

```typescript
public readonly healthProbe: CdnFrontdoorOriginGroupHealthProbeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference">CdnFrontdoorOriginGroupHealthProbeOutputReference</a>

---

##### `loadBalancing`<sup>Required</sup> <a name="loadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancing"></a>

```typescript
public readonly loadBalancing: CdnFrontdoorOriginGroupLoadBalancingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference">CdnFrontdoorOriginGroupLoadBalancingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorOriginGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference">CdnFrontdoorOriginGroupTimeoutsOutputReference</a>

---

##### `cdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="cdnFrontdoorProfileIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileIdInput"></a>

```typescript
public readonly cdnFrontdoorProfileIdInput: string;
```

- *Type:* string

---

##### `healthProbeInput`<sup>Optional</sup> <a name="healthProbeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbeInput"></a>

```typescript
public readonly healthProbeInput: CdnFrontdoorOriginGroupHealthProbe;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancingInput`<sup>Optional</sup> <a name="loadBalancingInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancingInput"></a>

```typescript
public readonly loadBalancingInput: CdnFrontdoorOriginGroupLoadBalancing;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `restoreTrafficTimeToHealedOrNewEndpointInMinutesInput`<sup>Optional</sup> <a name="restoreTrafficTimeToHealedOrNewEndpointInMinutesInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutesInput"></a>

```typescript
public readonly restoreTrafficTimeToHealedOrNewEndpointInMinutesInput: number;
```

- *Type:* number

---

##### `sessionAffinityEnabledInput`<sup>Optional</sup> <a name="sessionAffinityEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabledInput"></a>

```typescript
public readonly sessionAffinityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CdnFrontdoorOriginGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a> | cdktf.IResolvable

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId"></a>

```typescript
public readonly cdnFrontdoorProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `restoreTrafficTimeToHealedOrNewEndpointInMinutes`<sup>Required</sup> <a name="restoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```typescript
public readonly restoreTrafficTimeToHealedOrNewEndpointInMinutes: number;
```

- *Type:* number

---

##### `sessionAffinityEnabled`<sup>Required</sup> <a name="sessionAffinityEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabled"></a>

```typescript
public readonly sessionAffinityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorOriginGroupConfig <a name="CdnFrontdoorOriginGroupConfig" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.Initializer"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

const cdnFrontdoorOriginGroupConfig: cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.healthProbe">healthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes">restoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.sessionAffinityEnabled">sessionAffinityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.cdnFrontdoorProfileId"></a>

```typescript
public readonly cdnFrontdoorProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}.

---

##### `loadBalancing`<sup>Required</sup> <a name="loadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.loadBalancing"></a>

```typescript
public readonly loadBalancing: CdnFrontdoorOriginGroupLoadBalancing;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#load_balancing CdnFrontdoorOriginGroup#load_balancing}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}.

---

##### `healthProbe`<sup>Optional</sup> <a name="healthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.healthProbe"></a>

```typescript
public readonly healthProbe: CdnFrontdoorOriginGroupHealthProbe;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#health_probe CdnFrontdoorOriginGroup#health_probe}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restoreTrafficTimeToHealedOrNewEndpointInMinutes`<sup>Optional</sup> <a name="restoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```typescript
public readonly restoreTrafficTimeToHealedOrNewEndpointInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}.

---

##### `sessionAffinityEnabled`<sup>Optional</sup> <a name="sessionAffinityEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.sessionAffinityEnabled"></a>

```typescript
public readonly sessionAffinityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorOriginGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#timeouts CdnFrontdoorOriginGroup#timeouts}

---

### CdnFrontdoorOriginGroupHealthProbe <a name="CdnFrontdoorOriginGroupHealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.Initializer"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

const cdnFrontdoorOriginGroupHealthProbe: cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#interval_in_seconds CdnFrontdoorOriginGroup#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#protocol CdnFrontdoorOriginGroup#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#path CdnFrontdoorOriginGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.requestType">requestType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#request_type CdnFrontdoorOriginGroup#request_type}. |

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#interval_in_seconds CdnFrontdoorOriginGroup#interval_in_seconds}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#protocol CdnFrontdoorOriginGroup#protocol}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#path CdnFrontdoorOriginGroup#path}.

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#request_type CdnFrontdoorOriginGroup#request_type}.

---

### CdnFrontdoorOriginGroupLoadBalancing <a name="CdnFrontdoorOriginGroupLoadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.Initializer"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

const cdnFrontdoorOriginGroupLoadBalancing: cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.additionalLatencyInMilliseconds">additionalLatencyInMilliseconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#additional_latency_in_milliseconds CdnFrontdoorOriginGroup#additional_latency_in_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.sampleSize">sampleSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#sample_size CdnFrontdoorOriginGroup#sample_size}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.successfulSamplesRequired">successfulSamplesRequired</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#successful_samples_required CdnFrontdoorOriginGroup#successful_samples_required}. |

---

##### `additionalLatencyInMilliseconds`<sup>Optional</sup> <a name="additionalLatencyInMilliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.additionalLatencyInMilliseconds"></a>

```typescript
public readonly additionalLatencyInMilliseconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#additional_latency_in_milliseconds CdnFrontdoorOriginGroup#additional_latency_in_milliseconds}.

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#sample_size CdnFrontdoorOriginGroup#sample_size}.

---

##### `successfulSamplesRequired`<sup>Optional</sup> <a name="successfulSamplesRequired" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.successfulSamplesRequired"></a>

```typescript
public readonly successfulSamplesRequired: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#successful_samples_required CdnFrontdoorOriginGroup#successful_samples_required}.

---

### CdnFrontdoorOriginGroupTimeouts <a name="CdnFrontdoorOriginGroupTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.Initializer"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

const cdnFrontdoorOriginGroupTimeouts: cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#create CdnFrontdoorOriginGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#delete CdnFrontdoorOriginGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#read CdnFrontdoorOriginGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#update CdnFrontdoorOriginGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#create CdnFrontdoorOriginGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#delete CdnFrontdoorOriginGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#read CdnFrontdoorOriginGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_frontdoor_origin_group#update CdnFrontdoorOriginGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorOriginGroupHealthProbeOutputReference <a name="CdnFrontdoorOriginGroupHealthProbeOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

new cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetRequestType">resetRequestType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRequestType` <a name="resetRequestType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetRequestType"></a>

```typescript
public resetRequestType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestTypeInput">requestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType">requestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSecondsInput"></a>

```typescript
public readonly intervalInSecondsInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestTypeInput"></a>

```typescript
public readonly requestTypeInput: string;
```

- *Type:* string

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorOriginGroupHealthProbe;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---


### CdnFrontdoorOriginGroupLoadBalancingOutputReference <a name="CdnFrontdoorOriginGroupLoadBalancingOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

new cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetAdditionalLatencyInMilliseconds">resetAdditionalLatencyInMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSampleSize">resetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSuccessfulSamplesRequired">resetSuccessfulSamplesRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalLatencyInMilliseconds` <a name="resetAdditionalLatencyInMilliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetAdditionalLatencyInMilliseconds"></a>

```typescript
public resetAdditionalLatencyInMilliseconds(): void
```

##### `resetSampleSize` <a name="resetSampleSize" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSampleSize"></a>

```typescript
public resetSampleSize(): void
```

##### `resetSuccessfulSamplesRequired` <a name="resetSuccessfulSamplesRequired" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSuccessfulSamplesRequired"></a>

```typescript
public resetSuccessfulSamplesRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMillisecondsInput">additionalLatencyInMillisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSizeInput">sampleSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequiredInput">successfulSamplesRequiredInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds">additionalLatencyInMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize">sampleSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired">successfulSamplesRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalLatencyInMillisecondsInput`<sup>Optional</sup> <a name="additionalLatencyInMillisecondsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMillisecondsInput"></a>

```typescript
public readonly additionalLatencyInMillisecondsInput: number;
```

- *Type:* number

---

##### `sampleSizeInput`<sup>Optional</sup> <a name="sampleSizeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSizeInput"></a>

```typescript
public readonly sampleSizeInput: number;
```

- *Type:* number

---

##### `successfulSamplesRequiredInput`<sup>Optional</sup> <a name="successfulSamplesRequiredInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequiredInput"></a>

```typescript
public readonly successfulSamplesRequiredInput: number;
```

- *Type:* number

---

##### `additionalLatencyInMilliseconds`<sup>Required</sup> <a name="additionalLatencyInMilliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds"></a>

```typescript
public readonly additionalLatencyInMilliseconds: number;
```

- *Type:* number

---

##### `sampleSize`<sup>Required</sup> <a name="sampleSize" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

---

##### `successfulSamplesRequired`<sup>Required</sup> <a name="successfulSamplesRequired" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```typescript
public readonly successfulSamplesRequired: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorOriginGroupLoadBalancing;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---


### CdnFrontdoorOriginGroupTimeoutsOutputReference <a name="CdnFrontdoorOriginGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

new cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorOriginGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a> | cdktf.IResolvable

---



