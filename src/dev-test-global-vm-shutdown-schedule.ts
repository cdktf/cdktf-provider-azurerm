// https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DevTestGlobalVmShutdownScheduleConfig extends TerraformMetaArguments {
  readonly dailyRecurrenceTime: string;
  readonly enabled?: boolean;
  readonly location: string;
  readonly tags?: { [key: string]: string };
  readonly timezone: string;
  readonly virtualMachineId: string;
  /** notification_settings block */
  readonly notificationSettings: DevTestGlobalVmShutdownScheduleNotificationSettings[];
  /** timeouts block */
  readonly timeouts?: DevTestGlobalVmShutdownScheduleTimeouts;
}
export interface DevTestGlobalVmShutdownScheduleNotificationSettings {
  readonly enabled: boolean;
  readonly timeInMinutes?: number;
  readonly webhookUrl?: string;
}
export interface DevTestGlobalVmShutdownScheduleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DevTestGlobalVmShutdownSchedule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DevTestGlobalVmShutdownScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_global_vm_shutdown_schedule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dailyRecurrenceTime = config.dailyRecurrenceTime;
    this._enabled = config.enabled;
    this._location = config.location;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._virtualMachineId = config.virtualMachineId;
    this._notificationSettings = config.notificationSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily_recurrence_time - computed: false, optional: false, required: true
  private _dailyRecurrenceTime: string;
  public get dailyRecurrenceTime() {
    return this.getStringAttribute('daily_recurrence_time');
  }
  public set dailyRecurrenceTime(value: string) {
    this._dailyRecurrenceTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyRecurrenceTimeInput() {
    return this._dailyRecurrenceTime
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone: string;
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId: string;
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId
  }

  // notification_settings - computed: false, optional: false, required: true
  private _notificationSettings: DevTestGlobalVmShutdownScheduleNotificationSettings[];
  public get notificationSettings() {
    return this.interpolationForAttribute('notification_settings') as any;
  }
  public set notificationSettings(value: DevTestGlobalVmShutdownScheduleNotificationSettings[]) {
    this._notificationSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestGlobalVmShutdownScheduleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DevTestGlobalVmShutdownScheduleTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      daily_recurrence_time: this._dailyRecurrenceTime,
      enabled: this._enabled,
      location: this._location,
      tags: this._tags,
      timezone: this._timezone,
      virtual_machine_id: this._virtualMachineId,
      notification_settings: this._notificationSettings,
      timeouts: this._timeouts,
    };
  }
}
